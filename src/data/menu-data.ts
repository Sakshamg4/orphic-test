
interface MenuItem {
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    title: string;
    link: string;
    has_sub_dropdown?: boolean;
    sub_menus?: {
      title: string;
      link: string;
    }[];
  }[];
}[];


const menu_data: MenuItem[]  = [
  {
    title: "Demo",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { title: "Home 01", link: "/" },
      { title: "Home 02", link: "/home-2" },
      { title: "Home 03", link: "/home-3" },
    ],
  },
  {
    title: "About Us",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { title: "About 01", link: "/about-1" },
      { title: "About 02", link: "/about-2" },
      { title: "About 03", link: "/about-3" },
    ],
  },
  {
    title: "Pages",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        title: "Service",
        link: "#",
        has_sub_dropdown: true,
        sub_menus: [
          { title: "Service", link: "/service" },
          { title: "Service Details", link: "/single-service" },
        ],
      },
      {
        title: "Portfolio",
        link: "#",
        has_sub_dropdown: true,
        sub_menus: [
          { title: "Portfolio 01", link: "/portfolio-1" },
          { title: "Portfolio 02", link: "/portfolio-2" },
          { title: "Portfolio 03", link: "/portfolio-3" },
          { title: "Portfolio Details", link: "/single-portfolio" },
        ],
      },
      {
        title: "Team",
        link: "#",
        has_sub_dropdown: true,
        sub_menus: [
          { title: "Team", link: "/team" },
          { title: "Team Details", link: "/single-team" },
        ],
      },
      { title: "Faq", link: "/faq", has_sub_dropdown: false },
      { title: "Pricing", link: "/pricing", has_sub_dropdown: false },
      { title: "Error 404", link: "/error-404", has_sub_dropdown: false },
    ],
  },
  {
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { title: "Blog", link: "/blog" },
      { title: "Blog Details", link: "/single-blog" },
    ],
  },
  {
    title: "Contact",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { title: "Contact 01", link: "/contact-us1" },
      { title: "Contact 02", link: "/contact-us2" },
      { title: "Contact 03", link: "/contact-us3" },
    ],
  },
];

export default menu_data;