using System.Web;
using System.Web.Optimization;

namespace WEBAPI_ADIDAS
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/Javascript_bootstrap/bootstrap.js",
                      "~/Scripts/Jquery/jquery-3.2.1.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Bootstrap/bootstrap.css",
                      "~/Content/styleTrangChu.css",
                      "~/Content/styleListProduct.css",
                      "~/Content/styleProduct.css",
                      "~/Content/styleThongTinDatHang.css",
                      "~/Content/styleGioHang.css"));

            bundles.Add(new ScriptBundle("~/bundles/myscript").Include(
                     "~/Scripts/main.js"));

        }
    }
}
