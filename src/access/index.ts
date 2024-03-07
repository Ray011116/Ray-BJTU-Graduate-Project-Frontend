import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  const loginUser = store.state.user.loginUser;

  // 如果之前未登录过，执行自动登录
  if (!loginUser || !loginUser.userRole) {
    console.log("in here");
    // 等待用户登陆成功
    await store.dispatch("user/getLoginUser");
  }

  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;

  // 跳转的页面必须要登陆
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    // 如果未登录，则跳转到登录页面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 如果已登陆，则跳转到无权限页面
    if (checkAccess(loginUser, needAccess)) {
      next(`/noAuth`);
    }
  }

  next();
});
