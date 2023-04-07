import React from "react";
import colors from "../../../config/colors";
import { FacebookIcon } from "../../../resources/icons/facebook";
import { GithubIcon } from "../../../resources/icons/github";
import { InstagramIcon } from "../../../resources/icons/instagram";
import { LinkedInIcon } from "../../../resources/icons/linkedin";
import { LandingContainer, LandingContent, Name, NamePlaque, Tagline, Contact, ContactElement,Image } from "./styles";

function Landing(props) {
  return <LandingContainer>
    <LandingContent>
      <NamePlaque>
        <Name>Amal Jose</Name>
        <Tagline>React Developer. UX Designer. Photographer. Pianist. Random.</Tagline>
      </NamePlaque>
      <Contact>
        <ContactElement onClick={() => {
          window.open("https://www.linkedin.com/in/amaljose96");
        }}>
          <LinkedInIcon fillColor={colors.primary} />
        </ContactElement>
        <ContactElement onClick={() => {
          window.open("https://github.com/amaljose96");
        }}>
          <GithubIcon fillColor={colors.primary} />
        </ContactElement>
        <ContactElement onClick={() => {
          window.open("https://www.instagram.com/the_dude_aj96/");
        }}>
          <InstagramIcon fillColor={colors.primary} />
        </ContactElement>
        <ContactElement onClick={() => {
          window.open("https://www.facebook.com/amaljose96");
        }}>
          <FacebookIcon fillColor={colors.primary} />
        </ContactElement>
      </Contact>
      </LandingContent>
      <Image viewBox="0, 0, 400,358.3333333333333">
      <g>
      <path id="path0" d="M175.212 27.632 C 154.779 31.692,127.941 50.912,119.323 67.658 C 117.351 71.488,115.143 75.473,114.415 76.515 C 113.688 77.557,112.897 80.455,112.659 82.955 C 112.408 85.598,111.066 90.305,109.451 94.204 C 104.130 107.061,105.599 113.814,115.983 124.215 C 121.162 129.402,126.515 137.803,126.515 140.742 C 126.515 141.156,128.041 141.723,129.907 142.003 C 135.764 142.882,135.031 144.868,128.768 145.088 C 123.438 145.275,123.258 145.536,123.634 152.562 C 124.012 159.613,124.324 160.208,133.333 171.029 C 136.458 174.783,139.602 178.927,140.319 180.237 C 141.035 181.548,142.705 183.207,144.028 183.924 C 146.677 185.359,147.118 185.808,151.170 191.214 C 153.392 194.178,154.309 196.498,155.713 202.713 C 156.680 206.995,158.716 214.697,160.235 219.828 C 163.159 229.700,163.216 233.759,160.562 243.370 C 159.241 248.154,152.522 251.554,122.938 262.409 C 113.447 265.892,101.080 270.619,95.455 272.915 C 89.830 275.211,83.290 277.645,80.922 278.324 C 72.087 280.857,66.231 288.146,61.986 301.894 C 60.700 306.061,58.976 310.802,58.156 312.431 C 57.335 314.060,56.016 318.616,55.224 322.555 C 54.431 326.494,53.078 331.298,52.218 333.230 C 49.500 339.328,46.165 348.274,44.702 353.393 L 43.289 358.333 221.644 358.333 L 400.000 358.333 400.000 320.248 L 400.000 282.162 397.159 277.344 C 389.119 263.706,379.307 257.686,356.911 252.649 C 350.365 251.177,340.592 248.781,335.194 247.326 C 329.795 245.870,319.558 243.148,312.444 241.278 C 295.503 236.824,292.866 235.340,280.874 223.511 C 272.924 215.669,271.044 213.388,270.239 210.608 C 269.370 207.607,268.926 207.135,266.259 206.382 L 263.258 205.535 263.274 197.275 C 263.290 189.373,263.412 188.750,266.093 182.909 C 272.089 169.840,272.657 157.977,268.193 139.015 C 264.999 125.448,264.177 123.048,258.727 111.364 C 255.259 103.929,253.197 98.137,251.175 90.152 C 249.645 84.110,247.051 75.224,245.409 70.406 C 243.767 65.587,242.424 60.900,242.424 59.991 C 242.424 57.349,237.978 48.671,235.750 46.964 C 227.940 40.981,225.731 39.394,225.212 39.392 C 224.887 39.391,222.064 37.681,218.939 35.593 C 206.997 27.612,190.463 24.602,175.212 27.632 M208.301 42.936 C 216.269 45.127,225.267 51.038,228.520 56.217 L 230.284 59.026 227.642 59.521 C 226.189 59.794,225.000 60.299,225.000 60.645 C 225.000 60.990,223.748 61.378,222.218 61.507 C 219.078 61.773,218.037 63.248,220.450 64.014 C 221.419 64.321,222.791 64.030,223.951 63.270 C 225.545 62.225,226.061 62.184,227.086 63.017 C 228.143 63.876,228.245 63.831,227.817 62.689 C 227.171 60.966,227.413 61.016,229.664 63.068 C 231.969 65.169,234.364 68.918,233.777 69.505 C 233.538 69.744,234.023 70.416,234.853 70.998 C 235.684 71.580,236.364 72.570,236.364 73.200 C 236.364 73.829,237.216 75.461,238.258 76.827 C 240.168 79.332,240.716 80.741,239.482 79.979 C 236.841 78.347,225.841 79.689,218.561 82.532 C 217.727 82.857,215.682 83.560,214.015 84.093 C 212.348 84.627,210.021 85.867,208.843 86.850 C 207.666 87.832,206.217 88.636,205.624 88.636 C 205.031 88.636,204.545 88.981,204.545 89.403 C 204.545 90.256,198.447 89.726,197.764 88.814 C 196.958 87.735,186.795 88.339,183.926 89.636 C 182.377 90.336,180.906 90.909,180.658 90.909 C 180.409 90.909,178.438 91.714,176.277 92.699 C 174.116 93.683,171.496 94.753,170.455 95.076 C 169.413 95.399,167.753 96.293,166.767 97.064 C 165.781 97.834,164.673 98.278,164.305 98.051 C 163.937 97.824,163.636 97.941,163.636 98.312 C 163.636 98.683,162.800 99.434,161.779 99.981 C 159.768 101.057,158.255 104.234,157.891 108.144 C 157.589 111.393,158.264 111.258,162.624 107.197 C 164.637 105.322,166.711 103.788,167.233 103.788 C 167.755 103.788,168.182 103.491,168.182 103.128 C 168.182 102.228,177.376 102.115,178.766 102.998 C 180.605 104.166,173.995 107.574,169.886 107.575 C 168.949 107.575,168.182 107.917,168.182 108.333 C 168.182 108.750,167.740 109.091,167.199 109.091 C 166.659 109.091,164.992 110.369,163.495 111.932 C 156.156 119.592,157.458 124.283,166.036 121.086 C 169.225 119.898,169.667 119.884,170.548 120.946 C 171.293 121.843,172.434 122.023,175.346 121.701 C 177.447 121.469,178.738 121.464,178.215 121.689 C 176.095 122.602,178.230 123.279,181.156 122.621 C 182.880 122.234,184.453 122.079,184.650 122.277 C 184.848 122.474,185.729 121.966,186.607 121.148 C 187.486 120.329,188.590 119.808,189.061 119.988 C 193.692 121.766,202.977 111.003,203.038 103.788 C 203.091 97.367,210.241 97.576,214.605 104.125 C 217.011 107.735,217.961 108.388,226.835 112.542 C 230.916 114.452,239.768 116.147,238.474 114.770 C 237.542 113.780,239.262 111.561,241.371 111.032 C 242.481 110.753,244.482 109.691,245.819 108.672 C 247.156 107.652,248.820 106.818,249.518 106.818 C 250.478 106.818,250.698 106.328,250.422 104.806 C 249.919 102.032,250.567 101.313,252.111 102.932 C 254.827 105.782,259.255 114.084,259.579 116.934 C 259.728 118.245,260.361 120.603,260.986 122.174 C 261.610 123.745,262.123 125.620,262.126 126.341 C 262.128 127.062,262.640 128.628,263.262 129.821 C 264.576 132.341,264.724 134.091,263.622 134.091 C 263.197 134.091,262.977 134.858,263.133 135.795 C 263.288 136.733,263.270 137.074,263.092 136.553 C 262.474 134.746,261.364 135.618,261.364 137.911 C 261.364 141.152,260.017 142.367,257.291 141.585 C 254.975 140.921,253.485 141.321,254.167 142.424 C 254.389 142.783,254.248 143.276,253.855 143.519 C 253.461 143.762,252.921 143.275,252.655 142.435 C 252.301 141.320,251.511 140.909,249.722 140.909 C 248.375 140.909,246.949 140.615,246.553 140.255 C 246.157 139.894,244.129 139.193,242.045 138.695 C 239.962 138.197,236.955 137.222,235.362 136.528 L 232.466 135.266 232.907 131.080 C 233.395 126.451,232.654 124.850,229.571 123.872 C 228.547 123.547,227.077 122.477,226.304 121.494 L 224.898 119.707 221.874 122.137 C 219.407 124.120,218.727 124.367,218.179 123.480 C 217.621 122.578,217.072 122.550,214.950 123.318 C 213.543 123.826,211.814 124.242,211.107 124.242 C 209.842 124.242,204.545 129.109,204.545 130.270 C 204.545 130.598,203.355 131.676,201.899 132.667 C 197.574 135.613,199.052 138.273,205.820 139.731 C 207.523 140.097,208.201 140.656,208.128 141.632 C 208.068 142.430,207.608 142.856,207.042 142.639 C 206.145 142.295,205.719 144.072,205.862 147.564 C 205.891 148.295,205.647 148.327,204.881 147.691 C 204.097 147.040,203.081 147.428,200.489 149.369 C 198.634 150.758,196.065 152.473,194.779 153.180 C 193.203 154.046,192.588 154.849,192.892 155.642 C 193.177 156.383,192.924 156.818,192.208 156.818 C 190.802 156.818,190.132 158.428,190.558 160.778 C 190.789 162.051,190.507 162.601,189.569 162.707 C 186.774 163.024,185.718 163.358,184.614 164.275 C 183.960 164.817,183.283 164.925,183.036 164.526 C 182.544 163.730,186.336 159.370,187.268 159.659 C 187.604 159.763,187.879 159.369,187.879 158.783 C 187.879 157.568,184.882 158.030,183.852 159.403 C 183.511 159.858,183.449 159.462,183.714 158.523 C 184.413 156.035,183.407 153.087,182.445 154.807 C 182.055 155.503,181.943 156.407,182.195 156.816 C 182.450 157.228,182.163 157.370,181.551 157.135 C 180.772 156.836,180.288 157.452,179.909 159.227 C 179.613 160.610,179.106 162.083,178.782 162.500 C 178.458 162.917,178.026 163.939,177.821 164.773 C 177.548 165.884,177.407 165.682,177.292 164.015 L 177.136 161.742 176.396 164.318 C 175.835 166.269,175.898 167.044,176.654 167.514 C 177.478 168.028,177.476 168.418,176.642 169.763 C 175.967 170.853,175.885 171.642,176.394 172.151 C 177.225 172.982,176.741 175.000,175.711 175.000 C 175.358 175.000,174.849 173.830,174.581 172.401 C 174.313 170.971,173.616 169.619,173.032 169.394 C 172.427 169.162,171.970 167.943,171.970 166.564 C 171.970 163.339,170.905 164.502,170.789 167.854 C 170.735 169.399,170.025 171.193,169.061 172.219 C 168.161 173.177,167.424 174.365,167.424 174.859 C 167.424 175.353,167.044 175.758,166.578 175.758 C 166.105 175.758,165.907 175.090,166.129 174.242 C 166.544 172.656,164.893 172.064,164.015 173.485 C 163.134 174.910,160.986 174.232,160.059 172.236 C 159.550 171.139,159.314 169.949,159.535 169.591 C 159.757 169.232,159.445 168.939,158.843 168.939 C 158.234 168.939,157.541 167.929,157.283 166.667 C 157.027 165.417,156.609 163.371,156.353 162.121 C 156.098 160.871,155.416 159.848,154.838 159.848 C 154.261 159.848,153.788 159.317,153.788 158.667 C 153.788 157.983,153.428 157.709,152.932 158.015 C 152.414 158.336,152.214 158.132,152.425 157.499 C 152.799 156.377,151.358 154.545,150.101 154.545 C 149.681 154.545,149.320 153.949,149.299 153.220 C 149.210 150.028,148.969 148.835,148.330 148.415 C 145.970 146.866,145.039 118.972,147.280 116.919 C 147.683 116.550,147.771 116.837,147.493 117.614 C 147.178 118.490,147.394 118.939,148.130 118.939 C 149.397 118.939,149.520 118.278,148.542 116.733 C 148.086 116.013,148.383 114.961,149.445 113.524 C 150.434 112.186,151.254 109.489,151.636 106.314 C 151.972 103.524,152.637 101.000,153.114 100.706 C 153.592 100.411,153.748 99.790,153.461 99.327 C 153.175 98.864,153.344 98.485,153.836 98.485 C 154.516 98.485,154.520 98.231,153.854 97.428 C 152.753 96.101,153.063 94.475,154.545 93.803 C 156.546 92.897,157.760 93.123,157.302 94.318 C 156.601 96.145,157.356 95.642,159.464 92.877 C 160.990 90.877,161.310 89.824,160.895 88.170 C 160.441 86.362,160.285 86.254,159.863 87.459 C 159.424 88.709,159.152 88.577,157.563 86.345 C 156.092 84.279,156.004 83.907,157.086 84.322 C 157.879 84.626,158.226 84.530,157.949 84.082 C 157.695 83.670,157.037 83.333,156.487 83.333 C 155.938 83.333,155.103 82.869,154.632 82.301 C 153.935 81.461,154.165 81.336,155.865 81.631 C 157.890 81.982,157.908 81.956,156.439 80.793 C 155.606 80.134,153.500 79.583,151.759 79.570 C 143.588 79.507,144.228 70.005,152.846 63.426 C 163.075 55.617,167.421 53.157,175.940 50.350 C 180.631 48.805,186.004 46.730,187.879 45.739 C 191.473 43.840,198.045 42.303,199.760 42.961 C 200.454 43.227,200.622 42.953,200.292 42.091 C 199.756 40.696,200.406 40.765,208.301 42.936 M156.818 87.710 C 156.818 88.575,156.584 88.627,155.762 87.945 C 155.180 87.463,154.413 87.120,154.057 87.184 C 152.532 87.458,152.271 87.026,153.064 85.543 C 154.019 83.758,156.818 85.374,156.818 87.710 M233.158 101.515 C 233.969 102.815,233.914 103.029,232.772 103.020 C 230.431 103.002,228.034 102.122,228.457 101.438 C 228.682 101.073,228.338 100.978,227.691 101.226 C 227.044 101.474,226.515 101.300,226.515 100.839 C 226.515 99.286,232.122 99.857,233.158 101.515 M182.941 110.584 C 183.191 110.988,182.444 111.529,181.281 111.786 C 177.957 112.521,177.522 112.755,179.356 112.819 C 183.354 112.959,179.510 115.909,175.329 115.909 C 174.315 115.909,173.485 115.568,173.485 115.152 C 173.485 114.735,173.996 114.394,174.621 114.394 C 175.246 114.394,175.758 113.996,175.758 113.510 C 175.758 113.024,175.973 112.842,176.237 113.106 C 176.501 113.369,177.378 112.744,178.186 111.717 C 179.676 109.822,182.111 109.242,182.941 110.584 M176.515 118.182 C 176.515 118.598,175.663 118.939,174.621 118.939 C 173.580 118.939,172.480 118.965,172.178 118.996 C 171.876 119.027,171.507 118.687,171.357 118.239 C 171.197 117.759,172.201 117.424,173.801 117.424 C 175.294 117.424,176.515 117.765,176.515 118.182 M225.124 140.975 C 227.343 142.163,225.121 143.579,219.921 144.290 C 214.514 145.030,213.475 144.155,217.132 141.941 C 220.350 139.994,222.748 139.704,225.124 140.975 M212.953 145.662 C 211.673 146.991,209.054 146.942,209.742 145.601 C 210.105 144.896,210.232 143.842,210.025 143.260 C 209.767 142.537,210.260 142.657,211.583 143.639 C 212.647 144.429,213.263 145.339,212.953 145.662 M236.172 151.705 C 235.028 152.087,234.091 152.674,234.091 153.011 C 234.091 154.582,218.261 158.346,211.065 158.487 C 205.719 158.591,205.821 161.364,211.171 161.364 L 214.677 161.364 212.642 163.488 C 210.237 165.998,210.001 169.245,212.030 171.884 C 213.984 174.425,228.027 174.032,231.448 171.341 C 232.597 170.437,233.895 169.697,234.333 169.697 C 234.770 169.697,236.624 168.972,238.454 168.087 C 242.291 166.229,242.891 166.575,243.541 171.023 L 244.013 174.242 239.999 174.332 C 235.261 174.438,235.621 174.450,233.712 174.123 C 232.791 173.965,232.273 174.241,232.392 174.827 C 232.573 175.720,230.251 176.980,227.359 177.558 C 225.559 177.918,223.367 178.767,221.095 179.984 C 219.989 180.576,218.625 181.061,218.062 181.061 C 217.500 181.061,216.075 182.083,214.895 183.333 C 213.716 184.583,212.118 185.606,211.344 185.606 C 210.571 185.606,209.727 185.947,209.470 186.364 C 208.831 187.397,207.531 187.325,207.765 186.269 C 207.869 185.800,207.528 185.260,207.007 185.069 C 206.400 184.847,206.225 185.153,206.520 185.922 C 206.773 186.581,206.603 187.121,206.142 187.121 C 205.417 187.121,205.134 186.112,205.368 184.365 C 205.403 184.099,205.148 183.673,204.800 183.418 C 201.947 181.329,199.696 170.057,201.958 169.189 C 202.548 168.962,203.030 168.142,203.030 167.366 C 203.030 157.634,213.322 151.584,232.955 149.773 C 236.577 149.439,238.859 150.810,236.172 151.705 M136.684 155.368 C 137.109 155.764,137.035 156.785,136.495 157.970 C 133.811 163.860,136.530 167.510,143.843 167.834 C 149.392 168.079,150.732 170.511,146.551 172.749 C 145.531 173.294,144.697 173.988,144.697 174.289 C 144.697 175.330,147.165 175.781,148.192 174.928 C 150.989 172.607,152.932 178.020,150.261 180.691 C 146.663 184.290,142.567 183.525,140.757 178.917 C 139.715 176.264,139.706 175.925,140.690 176.302 C 141.760 176.713,143.145 175.402,143.170 173.953 C 143.177 173.586,141.818 173.468,140.152 173.692 C 138.485 173.915,137.113 173.875,137.103 173.602 C 137.094 173.329,135.222 171.061,132.943 168.561 C 128.166 163.318,128.127 163.209,130.774 162.544 C 132.663 162.070,132.737 161.868,132.281 158.430 C 131.673 153.841,133.605 152.497,136.684 155.368 M145.401 158.567 C 145.350 160.168,145.325 160.173,144.697 158.712 C 143.801 156.627,143.801 155.886,144.697 156.439 C 145.114 156.697,145.431 157.655,145.401 158.567 M248.485 162.218 C 248.485 163.748,246.982 164.991,246.946 163.492 C 246.928 162.749,246.689 162.786,245.996 163.636 C 243.808 166.322,243.324 165.158,243.808 158.381 L 243.939 156.535 246.212 158.712 C 247.462 159.910,248.485 161.487,248.485 162.218 M189.620 166.643 C 189.171 168.357,187.121 170.354,187.121 169.077 C 187.121 168.634,187.462 168.061,187.879 167.803 C 188.295 167.546,188.636 166.653,188.636 165.820 C 188.636 164.986,188.945 164.495,189.323 164.729 C 189.700 164.962,189.834 165.823,189.620 166.643 M163.052 167.566 C 163.430 168.698,165.152 169.322,165.152 168.326 C 165.152 167.919,164.612 167.379,163.952 167.126 C 163.214 166.843,162.868 167.012,163.052 167.566 M171.970 173.485 C 171.970 174.318,171.993 175.226,172.021 175.501 C 172.050 175.777,170.954 176.473,169.587 177.048 L 167.101 178.093 168.812 176.271 C 169.754 175.270,170.468 174.148,170.399 173.778 C 170.175 172.565,170.443 171.970,171.212 171.970 C 171.629 171.970,171.970 172.652,171.970 173.485 M162.620 208.245 C 163.301 210.585,163.920 213.438,163.994 214.583 C 164.283 219.046,164.432 219.627,165.587 220.781 C 166.672 221.867,166.663 222.019,165.493 222.468 C 163.483 223.239,160.926 217.208,157.941 204.653 C 155.357 193.792,159.288 196.809,162.620 208.245 M168.939 228.867 C 168.939 229.289,168.598 229.424,168.182 229.167 C 167.765 228.909,167.424 229.250,167.424 229.924 C 167.424 230.598,167.775 230.933,168.203 230.669 C 168.939 230.214,171.890 233.062,171.944 234.280 C 171.958 234.593,171.299 234.848,170.478 234.848 C 169.526 234.848,169.131 234.473,169.385 233.810 C 169.605 233.239,169.269 232.574,168.640 232.332 C 167.322 231.826,164.538 226.460,164.952 225.221 C 165.262 224.291,168.939 227.653,168.939 228.867 M195.455 259.030 C 195.455 260.161,192.937 264.535,191.084 266.623 C 190.138 267.689,188.962 269.669,188.469 271.023 C 187.977 272.377,187.320 273.485,187.008 273.485 C 186.056 273.485,186.869 265.018,187.882 264.392 C 188.404 264.070,188.624 263.472,188.372 263.065 C 187.818 262.167,189.873 260.203,192.440 259.179 C 194.873 258.208,195.455 258.179,195.455 259.030 M184.413 277.778 C 185.059 279.459,183.634 280.907,182.475 279.748 C 181.548 278.820,182.085 276.515,183.229 276.515 C 183.614 276.515,184.147 277.084,184.413 277.778 " stroke="none" fill={colors.primary} fill-rule="evenodd">
      </path>
      </g>
      </Image>
  </LandingContainer>;
}
export default Landing;