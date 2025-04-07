import config from "@/config";
import NoLayout from "@/layouts/NoLayout";
import Activity from "@/pages/Activity";
import AdminAffiliate from "@/pages/AdminAffiliate";
import AdminAnalytics from "@/pages/AdminAnalytics";
import AdminBanking from "@/pages/AdminBanking";
import AdminHome from "@/pages/AdminHome";
import AdminLicense from "@/pages/AdminLicense";
import AdminPost from "@/pages/AdminPost";
import AdminSoftware from "@/pages/AdminSoftware";
import AdminTickets from "@/pages/AdminTickets";
import AdminUser from "@/pages/AdminUser";
import Affiliate from "@/pages/Affiliate";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Payment from "@/pages/Payment";
import PaymentHistory from "@/pages/PaymentHistory";
import Products from "@/pages/Products";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
import Software from "@/pages/Software";
import Tickets from "@/pages/Tickets";

const routes = [
  // General pages
  {
    path: config.routes.register,
    component: Register,
    layout: null,
    navHome: true,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: null,
    navHome: true,
  },
  {
    path: config.routes.profile,
    component: Profile,
    protected: true,
  },

  // User pages
  {
    path: config.routes.home,
    component: Home,
    protected: true,
  },
  {
    path: config.routes.products,
    component: Products,
    protected: true,
  },
  {
    path: config.routes.activity,
    component: Activity,
    protected: true,
  },
  {
    path: config.routes.affiliate,
    component: Affiliate,
    protected: true,
  },
  {
    path: config.routes.payment,
    component: Payment,
    protected: true,
  },
  {
    path: config.routes.paymentHistory,
    component: PaymentHistory,
    protected: true,
  },
  {
    path: config.routes.software,
    component: Software,
    protected: true,
  },
  {
    path: config.routes.tickets,
    component: Tickets,
    protected: true,
  },

  // Admin pages
  {
    path: config.routes.adminHome,
    component: AdminHome,
    protected: true,
  },
  {
    path: config.routes.adminAffiliate,
    component: AdminAffiliate,
    protected: true,
  },
  {
    path: config.routes.adminAnalytics,
    component: AdminAnalytics,
    protected: true,
  },
  {
    path: config.routes.adminBanking,
    component: AdminBanking,
    protected: true,
  },
  {
    path: config.routes.adminLicense,
    component: AdminLicense,
    protected: true,
  },
  {
    path: config.routes.adminPost,
    component: AdminPost,
    protected: true,
  },
  {
    path: config.routes.adminSoftware,
    component: AdminSoftware,
    protected: true,
  },
  {
    path: config.routes.adminTicket,
    component: AdminTickets,
    protected: true,
  },
  {
    path: config.routes.adminUser,
    component: AdminUser,
    protected: true,
  },

  // Not found page
  {
    path: config.routes.notFound,
    component: NotFound,
    layout: NoLayout,
  },
];

export default routes;
