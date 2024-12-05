import { JSXInternal } from "preact/src/jsx";

export function Banner(props: JSXInternal.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      style={props.style}
      class={props.class}
      viewBox="0, 0, 400,52.21763332734782"
    >
      <g id="svgg">
        <path
          id="path0"
          d="M40.091 0.199 C 39.913 0.303,39.575 0.611,39.341 0.885 C 37.716 2.789,38.512 5.530,40.875 6.164 L 41.667 6.377 41.667 7.280 C 41.667 8.680,40.834 10.131,39.040 11.858 C 35.469 15.296,34.796 16.162,34.047 18.275 C 33.050 21.089,33.416 23.692,34.931 24.552 C 38.128 26.368,41.396 26.421,43.959 24.699 C 44.531 24.315,45.431 23.709,45.958 23.354 C 46.485 22.998,47.067 22.539,47.250 22.333 C 49.045 20.319,52.383 19.000,55.685 19.000 C 59.109 19.000,61.304 19.829,64.608 22.371 C 65.784 23.276,65.587 23.363,66.976 21.333 C 67.447 20.646,68.044 19.783,68.303 19.417 C 70.851 15.810,70.743 16.107,69.792 15.312 C 63.574 10.119,52.139 8.503,46.239 11.984 C 45.914 12.176,45.575 12.333,45.486 12.333 C 45.304 12.333,43.316 13.549,42.641 14.073 C 42.398 14.262,41.986 14.580,41.725 14.780 C 39.999 16.101,37.430 19.119,36.499 20.919 L 36.156 21.583 36.245 20.710 C 36.450 18.712,37.136 17.636,39.990 14.833 C 42.289 12.576,42.845 11.872,43.679 10.163 C 44.420 8.642,44.649 6.756,44.246 5.487 C 44.195 5.326,44.232 5.146,44.329 5.086 C 45.492 4.367,45.071 1.295,43.684 0.375 C 43.046 -0.048,40.714 -0.162,40.091 0.199 M0.000 31.484 L 0.000 51.833 4.583 51.833 L 9.167 51.833 9.167 45.417 L 9.167 39.000 12.143 39.000 L 15.119 39.000 15.720 39.875 C 16.050 40.356,16.558 41.087,16.849 41.500 C 17.139 41.912,18.017 43.188,18.800 44.333 C 19.582 45.479,20.379 46.618,20.569 46.864 C 20.760 47.109,21.088 47.559,21.297 47.864 C 21.506 48.168,22.210 49.185,22.862 50.125 L 24.046 51.833 29.791 51.833 C 34.762 51.833,35.523 51.801,35.442 51.590 C 35.361 51.378,34.304 49.856,31.167 45.434 C 30.754 44.852,29.854 43.573,29.167 42.592 C 28.479 41.610,27.729 40.552,27.500 40.241 C 27.271 39.929,26.962 39.506,26.815 39.300 L 26.546 38.926 25.065 39.421 C 17.275 42.025,8.893 35.894,8.867 27.573 C 8.828 15.421,24.542 10.392,31.618 20.292 C 32.733 21.851,32.926 21.660,32.334 19.583 C 31.307 15.979,28.536 13.272,24.828 12.248 C 21.169 11.239,21.977 11.297,10.542 11.213 L 0.000 11.135 0.000 31.484 M188.917 17.830 C 181.428 18.909,176.759 24.124,176.753 31.417 C 176.749 34.905,176.982 35.775,178.819 39.143 C 179.354 40.125,182.258 42.737,183.517 43.369 C 191.391 47.319,200.737 44.691,204.090 37.583 C 208.978 27.223,200.483 16.164,188.917 17.830 M80.667 31.500 L 80.667 44.833 83.333 44.833 L 86.000 44.833 86.000 41.000 L 86.000 37.167 89.230 37.167 L 92.460 37.167 93.110 38.042 C 93.715 38.857,94.042 39.321,94.667 40.258 C 94.804 40.464,95.583 41.577,96.397 42.733 L 97.878 44.833 100.689 44.833 C 102.460 44.833,103.500 44.771,103.500 44.666 C 103.500 44.519,102.546 43.075,100.719 40.458 C 100.415 40.023,99.892 39.273,99.557 38.792 C 99.221 38.310,98.884 37.892,98.807 37.861 C 98.730 37.831,98.667 37.736,98.667 37.651 C 98.667 37.567,98.440 37.184,98.162 36.801 L 97.658 36.104 98.474 35.716 C 103.653 33.255,104.723 24.983,100.377 21.001 C 97.691 18.540,95.934 18.167,87.022 18.167 L 80.667 18.167 80.667 31.500 M119.398 19.458 C 119.072 20.169,118.504 21.425,118.136 22.250 C 117.768 23.075,117.330 24.050,117.164 24.417 C 116.997 24.783,116.513 25.871,116.088 26.833 C 115.663 27.796,115.135 28.958,114.914 29.417 C 114.693 29.875,113.977 31.450,113.321 32.917 C 112.053 35.752,111.929 36.033,110.835 38.500 C 110.449 39.371,109.961 40.458,109.750 40.917 C 107.715 45.335,107.569 44.833,110.888 44.833 L 113.609 44.833 114.502 42.708 C 114.992 41.540,115.564 40.190,115.771 39.708 L 116.148 38.833 122.545 38.833 L 128.941 38.833 129.486 40.042 C 130.327 41.908,131.104 43.695,131.333 44.292 L 131.540 44.833 134.270 44.833 C 137.399 44.833,137.373 44.849,136.600 43.356 C 136.380 42.931,135.936 41.983,135.614 41.250 C 135.003 39.861,132.038 33.244,131.505 32.083 C 131.337 31.717,130.624 30.142,129.920 28.583 C 129.216 27.025,127.980 24.287,127.172 22.500 C 126.365 20.712,125.611 19.006,125.498 18.708 L 125.293 18.167 122.642 18.167 L 119.992 18.167 119.398 19.458 M143.667 31.509 L 143.667 44.852 151.125 44.793 L 158.583 44.734 160.239 44.272 C 172.592 40.824,173.708 24.164,161.914 19.276 C 159.540 18.293,158.303 18.173,150.458 18.170 L 143.667 18.167 143.667 31.509 M214.000 31.500 L 214.000 44.833 216.583 44.833 L 219.167 44.833 219.167 36.157 L 219.167 27.480 219.792 28.224 C 220.135 28.633,220.979 29.666,221.667 30.519 C 222.354 31.373,223.517 32.794,224.250 33.677 C 224.983 34.561,225.808 35.574,226.083 35.929 C 226.494 36.459,229.649 40.333,230.688 41.583 C 232.566 43.843,233.167 44.600,233.167 44.706 C 233.167 44.776,234.217 44.833,235.500 44.833 L 237.833 44.833 237.833 31.500 L 237.833 18.167 235.168 18.167 L 232.503 18.167 232.460 26.792 L 232.417 35.417 231.417 34.167 C 230.868 33.479,230.380 32.879,230.334 32.833 C 230.288 32.787,229.954 32.375,229.593 31.917 C 229.232 31.458,228.836 30.971,228.713 30.833 C 228.591 30.696,227.732 29.646,226.805 28.500 C 225.878 27.354,224.901 26.154,224.634 25.833 C 224.367 25.512,223.966 25.025,223.742 24.750 C 223.519 24.475,222.867 23.674,222.293 22.970 C 221.719 22.266,220.612 20.902,219.833 19.940 L 218.417 18.190 216.208 18.178 L 214.000 18.167 214.000 31.500 M193.137 22.674 C 198.052 23.808,201.016 28.904,199.692 33.948 C 197.484 42.357,185.453 42.717,182.542 34.461 C 180.191 27.794,186.226 21.080,193.137 22.674 M94.474 23.176 C 96.755 24.042,97.754 25.554,97.635 27.960 C 97.454 31.626,95.209 32.829,88.542 32.832 L 86.000 32.833 86.000 27.734 L 86.000 22.635 89.708 22.705 C 93.126 22.770,93.500 22.807,94.474 23.176 M158.650 23.221 C 166.073 25.570,166.875 35.955,159.889 39.271 C 158.228 40.060,157.621 40.139,153.125 40.160 L 149.167 40.177 149.167 31.407 L 149.167 22.636 153.208 22.707 C 157.017 22.774,157.331 22.803,158.650 23.221 M123.040 25.000 C 123.228 25.412,123.552 26.162,123.759 26.667 C 123.966 27.171,124.397 28.183,124.717 28.917 C 127.043 34.247,127.072 34.317,126.968 34.421 C 126.921 34.468,124.894 34.486,122.463 34.461 L 118.043 34.417 118.775 32.667 C 119.177 31.704,119.727 30.429,119.995 29.833 C 120.264 29.238,120.755 28.113,121.087 27.333 C 122.336 24.402,122.585 23.877,122.640 24.061 C 122.671 24.165,122.851 24.587,123.040 25.000 M62.125 25.374 C 62.086 25.489,62.336 25.958,62.681 26.417 C 67.733 33.137,64.972 42.454,56.993 45.609 L 55.417 46.233 52.667 46.236 L 49.917 46.240 48.409 45.639 C 45.429 44.453,41.500 40.964,41.500 39.505 C 41.500 37.711,34.560 34.173,34.365 35.868 C 34.247 36.887,36.295 41.934,37.264 43.013 C 37.394 43.158,37.501 43.345,37.502 43.430 C 37.514 44.187,41.911 48.277,44.000 49.473 C 47.837 51.669,49.648 52.083,55.417 52.083 L 60.083 52.083 62.068 51.527 C 65.718 50.504,68.402 49.041,70.792 46.772 L 72.000 45.624 72.000 38.229 L 72.000 30.833 69.081 30.833 L 66.163 30.833 65.652 29.718 C 64.675 27.584,62.346 24.717,62.125 25.374 "
          stroke="none"
          fill="var(--text-secondary)"
          fill-rule="evenodd"
        ></path>
        <path
          id="path1"
          d="M19.227 17.420 C 13.636 18.444,10.068 24.241,11.425 30.094 C 13.050 37.101,21.817 40.165,27.583 35.742 C 31.763 32.536,37.059 32.432,40.827 35.482 C 42.065 36.483,42.475 37.004,44.000 39.509 C 46.608 43.793,52.606 45.410,57.281 43.090 C 65.217 39.150,64.845 27.992,56.654 24.310 L 55.417 23.753 52.667 23.752 C 49.312 23.750,48.564 24.010,45.667 26.190 C 40.866 29.803,33.846 28.224,30.661 22.816 C 28.083 18.440,24.052 16.537,19.227 17.420 M261.250 18.067 C 261.158 18.103,260.408 18.226,259.583 18.340 C 256.213 18.807,252.314 21.196,250.752 23.750 C 250.584 24.025,250.275 24.512,250.066 24.833 C 247.073 29.415,248.088 37.106,252.230 41.245 C 256.664 45.675,265.077 46.521,270.581 43.090 C 272.499 41.895,272.345 42.481,272.294 36.568 L 272.250 31.417 270.750 31.417 L 269.250 31.417 269.206 35.951 L 269.161 40.486 268.090 40.997 C 263.313 43.276,257.779 42.364,254.313 38.726 C 252.598 36.926,251.578 34.239,251.601 31.583 C 251.677 22.605,262.124 17.823,269.599 23.345 C 270.702 24.160,270.592 24.172,271.631 23.120 C 272.756 21.980,272.686 21.778,270.640 20.285 C 268.726 18.887,262.763 17.479,261.250 18.067 M389.167 18.107 C 383.533 18.835,380.636 21.553,380.865 25.894 C 381.071 29.804,383.030 31.312,390.417 33.245 C 395.666 34.620,397.000 35.585,397.000 38.006 C 397.000 42.970,386.867 44.001,381.972 39.536 L 381.527 39.130 381.123 39.773 C 379.914 41.699,380.017 41.982,382.417 43.316 C 387.412 46.092,395.117 45.741,398.258 42.593 C 400.755 40.090,400.790 35.548,398.328 33.274 C 396.780 31.844,396.067 31.565,389.540 29.830 C 386.004 28.890,384.496 27.865,384.140 26.158 C 383.167 21.496,390.198 19.273,396.451 22.266 C 397.294 22.670,398.015 23.000,398.053 23.000 C 398.192 23.000,399.000 21.029,399.000 20.690 C 399.000 20.364,397.928 19.500,397.523 19.500 C 397.441 19.500,396.966 19.313,396.467 19.085 C 394.975 18.402,391.000 17.869,389.167 18.107 M290.866 19.369 C 290.291 20.635,285.987 30.012,285.336 31.417 C 285.081 31.967,283.914 34.517,282.743 37.083 C 281.572 39.650,280.366 42.275,280.062 42.917 C 279.759 43.558,279.462 44.290,279.404 44.542 L 279.297 45.000 280.957 45.000 L 282.617 45.000 283.156 43.792 C 283.453 43.127,284.157 41.555,284.723 40.297 L 285.750 38.011 292.947 38.006 L 300.144 38.000 300.256 38.375 C 300.317 38.581,300.840 39.800,301.418 41.083 C 301.995 42.367,302.621 43.773,302.808 44.208 L 303.148 45.000 304.824 45.000 C 306.861 45.000,306.822 45.243,305.315 41.982 C 304.663 40.571,303.944 39.004,303.718 38.500 C 303.492 37.996,303.098 37.133,302.844 36.583 C 301.634 33.968,298.965 28.126,298.504 27.083 C 298.220 26.442,297.796 25.504,297.560 25.000 C 297.325 24.496,296.549 22.808,295.837 21.250 L 294.542 18.417 292.942 18.369 L 291.342 18.321 290.866 19.369 M314.167 31.667 L 314.167 45.000 315.750 45.000 L 317.333 45.000 317.333 34.978 L 317.333 24.955 317.667 25.379 C 317.850 25.612,318.000 25.867,318.000 25.945 C 318.000 26.024,318.262 26.478,318.583 26.954 C 318.904 27.430,319.167 27.856,319.167 27.901 C 319.167 27.983,320.433 30.144,322.644 33.833 C 323.791 35.748,324.505 36.969,325.371 38.500 C 325.552 38.821,326.045 39.665,326.466 40.375 L 327.230 41.667 328.119 41.667 C 328.929 41.667,329.025 41.626,329.205 41.208 C 329.313 40.956,329.612 40.436,329.868 40.053 C 330.124 39.670,330.333 39.317,330.333 39.268 C 330.333 39.219,330.791 38.407,331.351 37.464 C 331.911 36.521,332.672 35.225,333.043 34.583 C 333.414 33.942,333.893 33.137,334.109 32.795 C 334.324 32.453,334.500 32.136,334.500 32.090 C 334.500 32.044,334.762 31.596,335.083 31.095 C 335.404 30.593,335.667 30.149,335.667 30.108 C 335.667 30.068,335.980 29.520,336.363 28.892 C 337.217 27.492,338.119 25.943,338.527 25.173 C 338.827 24.608,338.833 24.799,338.833 34.798 L 338.833 45.000 340.333 45.000 L 341.833 45.000 341.833 31.667 L 341.833 18.333 340.523 18.333 L 339.213 18.333 337.158 21.875 C 336.028 23.823,334.430 26.579,333.607 28.000 C 332.785 29.421,331.850 31.033,331.531 31.583 C 331.211 32.133,330.792 32.858,330.600 33.194 C 329.043 35.912,328.264 37.261,328.218 37.321 C 328.139 37.424,327.754 36.882,327.163 35.833 C 326.879 35.329,326.350 34.429,325.988 33.833 C 325.626 33.237,325.282 32.637,325.223 32.500 C 325.163 32.362,324.690 31.537,324.171 30.667 C 323.652 29.796,322.677 28.146,322.005 27.000 C 321.333 25.854,320.607 24.637,320.392 24.295 C 320.176 23.953,320.000 23.633,320.000 23.583 C 320.000 23.534,319.823 23.213,319.606 22.871 C 319.389 22.530,318.697 21.369,318.067 20.292 L 316.921 18.333 315.544 18.333 L 314.167 18.333 314.167 31.667 M353.833 31.668 L 353.833 45.003 363.375 44.960 L 372.917 44.917 372.966 43.670 C 373.038 41.865,373.706 42.000,364.718 42.000 L 357.000 42.000 357.000 37.417 L 357.000 32.833 363.833 32.833 L 370.667 32.833 370.667 31.417 L 370.667 30.000 363.833 30.000 L 357.000 30.000 357.000 25.585 L 357.000 21.170 364.625 21.127 L 372.250 21.083 372.298 19.708 L 372.347 18.333 363.090 18.333 L 353.833 18.333 353.833 31.668 M20.000 21.625 C 20.105 22.152,20.260 22.846,20.345 23.167 C 20.582 24.069,20.553 24.134,19.708 24.565 C 19.197 24.825,18.807 25.176,18.607 25.553 L 18.297 26.137 17.523 25.875 C 15.762 25.277,14.833 24.913,14.833 24.818 C 14.833 24.008,17.029 21.781,18.507 21.093 C 19.743 20.518,19.783 20.532,20.000 21.625 M294.126 24.833 C 294.766 26.254,295.760 28.467,296.333 29.750 C 296.906 31.033,297.526 32.421,297.711 32.833 C 298.258 34.056,298.667 35.023,298.667 35.097 C 298.667 35.135,296.046 35.167,292.844 35.167 L 287.021 35.167 287.523 34.042 C 287.800 33.423,288.161 32.617,288.326 32.250 C 288.491 31.883,288.910 30.946,289.258 30.167 C 291.124 25.983,292.886 22.162,292.926 22.210 C 292.945 22.232,293.485 23.412,294.126 24.833 M27.558 24.208 C 28.280 25.520,28.559 27.034,28.332 28.418 C 28.242 28.967,28.168 29.465,28.168 29.524 C 28.167 29.583,27.623 29.428,26.958 29.179 C 26.294 28.930,25.538 28.657,25.279 28.572 C 24.837 28.426,24.805 28.354,24.768 27.393 C 24.744 26.773,24.617 26.199,24.447 25.940 C 24.076 25.373,23.999 25.502,25.446 24.262 C 26.996 22.934,26.858 22.938,27.558 24.208 M22.005 26.253 C 23.469 27.010,22.980 28.833,21.313 28.833 C 19.760 28.833,19.510 26.663,21.000 26.118 C 21.397 25.973,21.487 25.985,22.005 26.253 M51.396 28.458 C 51.559 29.260,51.729 30.069,51.772 30.255 C 51.834 30.521,51.727 30.638,51.270 30.803 C 50.731 30.998,49.790 31.879,49.640 32.331 C 49.593 32.470,49.312 32.427,48.662 32.180 C 48.160 31.990,47.665 31.833,47.562 31.833 C 47.459 31.833,47.102 31.720,46.769 31.581 L 46.164 31.328 46.571 30.539 C 47.387 28.958,49.537 27.250,51.007 27.015 C 51.057 27.007,51.232 27.656,51.396 28.458 M58.636 30.208 C 59.496 31.463,59.894 33.656,59.563 35.313 C 59.433 35.962,59.318 35.961,57.514 35.293 L 56.056 34.753 56.056 33.814 C 56.056 33.184,55.948 32.692,55.729 32.316 L 55.402 31.757 56.326 31.061 C 56.834 30.678,57.432 30.170,57.654 29.932 C 58.155 29.397,58.062 29.371,58.636 30.208 M20.810 30.761 L 21.779 30.870 22.080 32.477 C 22.245 33.360,22.420 34.188,22.468 34.317 C 22.772 35.132,18.623 34.153,17.132 33.058 C 16.091 32.294,16.084 32.321,17.670 31.000 C 18.056 30.679,18.488 30.290,18.631 30.135 C 18.874 29.871,18.922 29.878,19.366 30.252 C 19.691 30.525,20.145 30.685,20.810 30.761 M170.045 31.333 C 170.045 31.746,170.078 31.915,170.118 31.708 C 170.157 31.502,170.157 31.165,170.118 30.958 C 170.078 30.752,170.045 30.921,170.045 31.333 M53.654 32.931 C 54.494 33.638,54.263 34.713,53.173 35.164 C 52.104 35.607,50.989 34.559,51.370 33.467 C 51.721 32.461,52.795 32.209,53.654 32.931 M52.044 37.166 L 53.065 37.446 53.425 39.132 L 53.785 40.818 53.294 40.925 C 51.836 41.246,47.667 39.577,47.667 38.673 C 47.667 38.156,50.241 36.374,50.625 36.626 C 50.844 36.769,51.482 37.012,52.044 37.166 "
          stroke="none"
          fill="var(--accent-primary)"
          fill-rule="evenodd"
        ></path>
      </g>
    </svg>
  );
}
