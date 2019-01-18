import Dashboard from "empViews/Dashboard/Dashboard.jsx";
import Account from "empViews/Account/Account.jsx";
import Payments from "empViews/Payments/Payments.jsx";
import Wallets from "empViews/Wallets/Wallets.jsx";
import Paystubs from "empViews/Paystubs/Paystubs.jsx";



var dashRoutes = [
  {
    path: "/dashboard/:id?",
    name: "Dashboard",
    icon: "ic_dashboard",
    component: Dashboard,
    show:true,
  },
  // {
  //   path: "/payments",
  //   name: "Payments",
  //   icon: "ic_payments",
  //   component: Paystubs,
  //   show:true,
  // },
  {
    path: "/paystubs",
    name: "Paystubs",
    component: Paystubs,
    icon: "ic_paystub",
    show:true

  },
  {
    path:"/wallets",
    name:"Wallets",
    component:Wallets,
    icon: "ic_wallet",
    show:true

  },

  {
    path: "/account",
    name: "Account",
    icon: "ic_account",
    component: Account,
    show:true,


  },
  {redirect: true,path:"/",pathTo:"/dashboard",component:Dashboard}

  // {redirect: true,path:"/",pathTo:"/dashboard",component:Dashboard}

];
export default dashRoutes;
