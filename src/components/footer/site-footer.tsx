import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site-config";

const SiteFooter = () => {
    return (
        <div className="flex flex-col">
            <div className="grow bg-muted" />
            <footer className="border-t">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
                        {siteConfig.footerItems.map(({ links }, index) => (
                            <div key={index}>
                                <ul className="mt-4 space-y-3">
                                    {links.map(({ title, href }) => (
                                        <li key={title}>
                                            <Link
                                                to={href}
                                                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                                            >
                                                {title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <Separator />
                    <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-x-4 gap-y-4">
                        <img src={siteConfig.logo} alt="EGC India Logo" className="h-12 w-auto" />
                        <span className="text-muted-foreground text-sm">
                            &copy; {new Date().getFullYear()}{" "}
                            <Link to="/" target="_blank" className="hover:text-foreground">
                                EGC INDIA
                            </Link>
                            . All rights reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SiteFooter;