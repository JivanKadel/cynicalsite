import { Linkedin, Mail, MapPin, Phone, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    Products: [
      { label: "Bugv Platform", href: "/products/bugv" },
      { label: "Vigile.AI", href: "/products/vigile" },
      {
        label: "Falcon",
        href: "https://webmonitoring.doit.gov.np/dashboard",
      },
      { label: "Pricing", href: "/pricing" },
    ],
    Solutions: [
      { label: "Application Security", href: "/solutions/app-security" },
      { label: "Cloud Security", href: "/solutions/cloud-security" },
      { label: "AI/ML Security", href: "/solutions/app-security" },
      { label: "Threat Intelligence", href: "/solutions/threat-intel" },
      { label: "Incident Response", href: "/solutions/incident-response" },
    ],
    Resources: [
      { label: "Research", href: "/research" },
      { label: "Blog", href: "/blogs" },
      { label: "Events", href: "/events" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
    Company: [
      { label: "Company", href: "/company" },
      { label: "Vision", href: "/vision" },
      { label: "Team", href: "/company#our-team" },
      { label: "Careers", href: "/career" },
      { label: "Contact", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/cynicaltechnology",
      label: "Facebook",
      hoverColor: "hover:text-foreground-600",
      hoverBg: "hover:bg-blue-600/10",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/cynicaltechnology/",
      label: "LinkedIn",
      hoverColor: "hover:text-foreground-700",
      hoverBg: "hover:bg-blue-700/10",
    },
  ];

  return (
    <footer className="p-4 lg:pt-16 border-t-2 border-border/30">
      {/* Main Footer */}
      <div className="container mx-auto py-8 lg:py-20 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 content-start">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-medium tracking-widest uppercase text-foreground sm:text-sm md:mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li
                    key={link.label}
                    className="flex mb-3 text-xs md:text-sm md:mb-4"
                  >
                    <a
                      href={link.href}
                      className="font-inter font-normal text-foreground/90 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1 self-start">
            <Link
              role="link"
              title="Cynical Home Page"
              href="/"
              className="flex items-center gap-2 h-12 text-black dark:text-white  md:-mt-8"
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="100%"
                viewBox="0 0 720 288"
                enableBackground="new 0 0 720 288"
                xmlSpace="preserve"
                className="h-24"
              >
                <path
                  className="fill-black dark:fill-white"
                  fill="inherit"
                  opacity="1.000000"
                  stroke="none"
                  d="
            M449.312439,166.169952 
              C452.808990,166.930115 454.470795,168.900467 454.001068,171.975418 
              C453.481995,175.373566 450.913879,176.351288 447.730743,176.345276 
              C429.586121,176.311005 411.440247,176.447311 393.297211,176.272568 
              C383.432159,176.177551 374.953094,164.716904 376.222626,153.775925 
              C377.463593,143.081177 384.195404,133.348785 398.523285,133.880951 
              C413.983337,134.455170 429.481354,133.963654 444.962067,134.057175 
              C448.871063,134.080795 453.977173,133.535660 453.995392,139.257980 
              C454.013794,145.048767 448.997101,144.346191 445.026428,144.350922 
              C429.378693,144.369568 413.730774,144.318954 398.083344,144.387375 
              C389.235413,144.426056 384.717926,150.659698 387.214691,159.087219 
              C388.742401,164.243744 392.424011,165.976974 397.450562,165.963058 
              C411.599823,165.923920 425.749298,165.961548 439.898712,165.984497 
              C442.893951,165.989365 445.889038,166.060425 449.312439,166.169952 
            z"
                />
                <path
                  className="fill-black dark:fill-white"
                  opacity="1.000000"
                  stroke="none"
                  d="
            M124.847275,165.626587 
              C142.090332,165.779892 158.916214,165.875641 175.742050,165.975983 
              C182.466141,166.016083 185.580017,167.731064 185.086334,171.490646 
              C184.325165,177.287155 179.654770,176.311646 175.755859,176.320938 
              C159.093170,176.360641 142.429108,176.222382 125.768044,176.392563 
              C118.346886,176.468353 113.341316,172.977570 110.227631,166.690536 
              C106.081924,158.319687 106.394264,149.930466 111.436371,141.956421 
              C114.821388,136.603058 119.922478,134.079300 126.179634,134.058044 
              C143.508621,133.999191 160.837921,134.018646 178.167068,134.038971 
              C181.855331,134.043304 185.153564,135.184158 185.055664,139.478195 
              C184.954361,143.921143 181.439560,144.383072 177.827408,144.375107 
              C161.497940,144.339127 145.168243,144.334244 128.838852,144.388077 
              C122.371597,144.409409 118.693222,147.228928 117.562935,152.760910 
              C116.431015,158.300858 118.938400,162.978134 124.847275,165.626587 
            z"
                />
                <path
                  className="fill-black dark:fill-white"
                  opacity="1.000000"
                  stroke="none"
                  d="
            M286.297272,155.445343 
              C286.280640,160.557556 286.329071,165.220276 286.240051,169.880386 
              C286.171753,173.455688 284.754730,176.237045 280.740326,176.168152 
              C276.942139,176.102982 275.656311,173.280273 275.691681,169.992615 
              C275.766724,163.023834 274.836456,155.997040 276.593506,149.104950 
              C279.074615,139.372818 285.622955,134.118637 295.635864,134.039261 
              C306.789764,133.950821 317.945923,133.953690 329.099579,134.065491 
              C341.685211,134.191650 349.267303,141.298477 350.105194,153.933197 
              C350.456940,159.237198 350.226166,164.584656 350.147491,169.910690 
              C350.093933,173.537048 348.474823,176.214081 344.556061,176.153244 
              C340.708923,176.093536 339.815643,173.244354 339.697418,169.898621 
              C339.492157,164.091385 340.366821,158.237518 339.037689,152.478943 
              C337.775391,147.009781 334.856415,144.446793 329.266724,144.390961 
              C318.279663,144.281265 307.289276,144.268356 296.302917,144.414352 
              C289.823578,144.500458 287.142181,147.522064 286.297272,155.445343 
            z"
                />
                <path
                  className="fill-black dark:fill-white"
                  opacity="1.000000"
                  stroke="none"
                  d="
            M504.396820,151.563553 
              C496.591858,141.174057 496.586639,141.170135 488.920898,151.366623 
              C483.618652,158.419296 478.360840,165.505585 473.027496,172.534592 
              C470.770599,175.509094 468.083221,178.019333 464.284271,175.031708 
              C460.732605,172.238556 462.372742,169.110886 464.478363,166.268967 
              C471.416504,156.904953 478.312042,147.507401 485.389313,138.249100 
              C491.554749,130.183594 501.266235,130.109344 507.352539,138.057175 
              C514.437439,147.309006 521.353882,156.690018 528.328979,166.025711 
              C530.581543,169.040558 532.256836,172.376877 528.463806,175.178314 
              C524.619812,178.017517 522.086792,175.290268 519.849854,172.259338 
              C514.808350,165.428299 509.699493,158.647003 504.396820,151.563553 
            z"
                />
                <path
                  className="fill-black dark:fill-white"
                  opacity="1.000000"
                  stroke="none"
                  d="
            M543.238831,134.495667 
              C547.740051,134.408676 549.172913,136.918442 549.217529,140.544876 
              C549.293335,146.704361 549.245911,152.865280 549.273010,159.025482 
              C549.301331,165.442230 549.702148,165.910568 556.005920,165.929825 
              C571.989380,165.978668 587.973083,165.947998 603.956604,165.984421 
              C605.778625,165.988571 607.630798,166.050690 609.414490,166.380478 
              C612.063843,166.870270 613.386719,168.578506 613.290161,171.350189 
              C613.194458,174.093674 611.732971,175.621658 609.153870,176.204666 
              C608.672729,176.313446 608.160950,176.318695 607.663330,176.318573 
              C588.849548,176.313705 570.034180,176.441849 551.222961,176.216965 
              C544.621521,176.138046 539.218811,170.784424 538.869141,164.019760 
              C538.457153,156.049271 538.691650,148.041840 538.767761,140.051605 
              C538.793457,137.358551 539.879761,135.184357 543.238831,134.495667 
            z"
                />
                <path
                  className="fill-black dark:fill-white"
                  opacity="1.000000"
                  stroke="none"
                  d="
            M214.592789,157.657349 
              C207.376175,153.953629 201.593613,148.929031 195.813370,143.916031 
              C193.165146,141.619339 192.608673,138.664886 194.837082,135.977798 
              C197.041428,133.319778 199.933014,133.960922 202.425034,135.869308 
              C206.119278,138.698380 209.597061,141.818085 213.360336,144.547516 
              C224.659225,152.742432 238.119217,152.832596 249.583038,144.758316 
              C253.244995,142.179092 256.626068,139.199326 260.117432,136.380188 
              C262.874481,134.153976 265.911285,133.245117 268.600525,136.014435 
              C271.527527,139.028656 269.883179,141.927383 267.218445,144.138184 
              C262.873199,147.743225 258.586700,151.496674 253.866821,154.557449 
              C241.557205,162.540131 228.490952,163.718826 214.592789,157.657349 
            z"
                />
                <path
                  className="fill-black dark:fill-white"
                  opacity="1.000000"
                  stroke="none"
                  d="
            M358.502197,173.040131 
              C357.176208,161.714188 357.896881,150.751495 357.882263,139.803391 
              C357.877991,136.597580 359.690399,134.452469 363.183838,134.462845 
              C366.711029,134.473328 368.240021,136.521637 368.245178,139.880859 
              C368.260742,150.016953 368.253265,160.153107 368.270355,170.289185 
              C368.274597,172.821640 367.499298,174.975296 364.985901,175.897430 
              C362.279541,176.890350 360.109680,175.973358 358.502197,173.040131 
            z"
                />
                <path
                  className="fill-black dark:fill-white"
                  opacity="1.000000"
                  stroke="none"
                  d="
            M491.980652,161.014648 
              C494.962769,158.754776 497.831238,158.672470 500.519348,160.558929 
              C502.557312,161.989151 503.244141,164.283432 502.817963,166.713745 
              C502.350311,169.380508 500.692230,171.149002 498.047363,171.845245 
              C495.352020,172.554764 493.153198,171.620712 491.493500,169.485641 
              C489.351593,166.730255 489.769745,163.975037 491.980652,161.014648 
            z"
                />
                <path
                  className="fill-black dark:fill-white"
                  opacity="1.000000"
                  stroke="none"
                  d="
            M236.459381,175.533707 
              C230.855774,178.469528 226.697571,177.429779 225.649826,173.055084 
              C224.940323,170.092682 225.559540,167.433289 228.422592,165.718597 
              C231.274796,164.010406 233.919479,164.600006 236.170731,166.730637 
              C238.886139,169.300522 238.864410,172.242599 236.459381,175.533707 
            z"
                />
              </svg>
            </Link>
            <div className="space-y-3 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-inter break-all">
                  info@cynicaltechnology.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-inter">+977-01-4530730</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-8 h-8" />
                <span className="font-inter">
                  Sharada Bhawan, Maitidevi Marg, Kathmandu, Nepal
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center ${social.hoverBg} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon
                    className={`w-6 h-6 text-muted-foreground ${social.hoverColor}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pb-2 md:mx-20 border-t border-border">
        <div className="container mx-auto py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-inter text-center">
                Copyright © {new Date().getFullYear()} Cynical Technology. All
                Rights Reserved.
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-inter">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Security</Link>
              <Link href="#">Cookie Settings</Link>
              <Link href="#">Responsible Disclosure</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
