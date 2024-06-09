import {Path, Svg} from 'react-native-svg';
import {colors} from '../colors';

interface SvgIconsProps {
  size?: number;
  fill?: string;
}

const SvgIcon = {
  Activity: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.2 16L12 13.9L14.75 16L13.7 12.6L16.5 10.4H13.1L12 7L10.9 10.4H7.5L10.25 12.6L9.2 16ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V14.625C2 14.4417 2.05833 14.2833 2.175 14.15C2.29167 14.0167 2.44167 13.9333 2.625 13.9C3.025 13.7667 3.35433 13.525 3.613 13.175C3.87167 12.825 4.00067 12.4333 4 12C3.99933 11.5667 3.87033 11.175 3.613 10.825C3.35567 10.475 3.02633 10.2333 2.625 10.1C2.44167 10.0667 2.29167 9.98333 2.175 9.85C2.05833 9.71667 2 9.55833 2 9.375V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V9.375C22 9.55833 21.9417 9.71667 21.825 9.85C21.7083 9.98333 21.5583 10.0667 21.375 10.1C20.975 10.2333 20.646 10.475 20.388 10.825C20.13 11.175 20.0007 11.5667 20 12C19.9993 12.4333 20.1287 12.825 20.388 13.175C20.6473 13.525 20.9763 13.7667 21.375 13.9C21.5583 13.9333 21.7083 14.0167 21.825 14.15C21.9417 14.2833 22 14.4417 22 14.625V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM4 18H20V15.45C19.3833 15.0833 18.8957 14.596 18.537 13.988C18.1783 13.38 17.9993 12.7173 18 12C18.0007 11.2827 18.18 10.6203 18.538 10.013C18.896 9.40567 19.3833 8.918 20 8.55V6H4V8.55C4.61667 8.91667 5.10433 9.40433 5.463 10.013C5.82167 10.6217 6.00067 11.284 6 12C5.99933 12.716 5.82033 13.3787 5.463 13.988C5.10567 14.5973 4.618 15.0847 4 15.45V18Z"
        fill={fill}
      />
    </Svg>
  ),
  ActivityFilled: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.2 16L12 13.9L14.75 16L13.7 12.6L16.5 10.4H13.1L12 7L10.9 10.4H7.5L10.25 12.6L9.2 16ZM2 20V14C2.55 14 3.021 13.8043 3.413 13.413C3.805 13.0217 4.00067 12.5507 4 12C3.99933 11.4493 3.80367 10.9787 3.413 10.588C3.02233 10.1973 2.55133 10.0013 2 10V4H22V10C21.45 10 20.9793 10.196 20.588 10.588C20.1967 10.98 20.0007 11.4507 20 12C19.9993 12.5493 20.1953 13.0203 20.588 13.413C20.9807 13.8057 21.4513 14.0013 22 14V20H2Z"
        fill={fill}
      />
    </Svg>
  ),
  Festa: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 21L7.337 8.63196L15.5 17.019L3 21Z"
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <Path
        d="M11.5 9.5L14 7C15.3335 5.6665 15.5 4.5 14.5 3.5M14.5 12.5L17 10C18.6665 8.3335 20.3335 8.3335 22 10"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 3.5C10.2652 3.5 10.5196 3.39464 10.7071 3.20711C10.8946 3.01957 11 2.76522 11 2.5C11 2.23478 10.8946 1.98043 10.7071 1.79289C10.5196 1.60536 10.2652 1.5 10 1.5C9.73478 1.5 9.48043 1.60536 9.29289 1.79289C9.10536 1.98043 9 2.23478 9 2.5C9 2.76522 9.10536 3.01957 9.29289 3.20711C9.48043 3.39464 9.73478 3.5 10 3.5ZM21 3C21.2652 3 21.5196 2.89464 21.7071 2.70711C21.8946 2.51957 22 2.26522 22 2C22 1.73478 21.8946 1.48043 21.7071 1.29289C21.5196 1.10536 21.2652 1 21 1C20.7348 1 20.4804 1.10536 20.2929 1.29289C20.1054 1.48043 20 1.73478 20 2C20 2.26522 20.1054 2.51957 20.2929 2.70711C20.4804 2.89464 20.7348 3 21 3ZM21 14.5C21.2652 14.5 21.5196 14.3946 21.7071 14.2071C21.8946 14.0196 22 13.7652 22 13.5C22 13.2348 21.8946 12.9804 21.7071 12.7929C21.5196 12.6054 21.2652 12.5 21 12.5C20.7348 12.5 20.4804 12.6054 20.2929 12.7929C20.1054 12.9804 20 13.2348 20 13.5C20 13.7652 20.1054 14.0196 20.2929 14.2071C20.4804 14.3946 20.7348 14.5 21 14.5ZM19.5 19C19.7652 19 20.0196 18.8946 20.2071 18.7071C20.3946 18.5196 20.5 18.2652 20.5 18C20.5 17.7348 20.3946 17.4804 20.2071 17.2929C20.0196 17.1054 19.7652 17 19.5 17C19.2348 17 18.9804 17.1054 18.7929 17.2929C18.6054 17.4804 18.5 17.7348 18.5 18C18.5 18.2652 18.6054 18.5196 18.7929 18.7071C18.9804 18.8946 19.2348 19 19.5 19Z"
        fill={colors.grey300}
      />
    </Svg>
  ),
  FestaFilled: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 21L7.337 8.63196L15.5 17.019L3 21Z"
        fill={fill}
        stroke={fill}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <Path
        d="M11.5 9.5L14 7C15.3335 5.6665 15.5 4.5 14.5 3.5M14.5 12.5L17 10C18.6665 8.3335 20.3335 8.3335 22 10"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 3.5C10.2652 3.5 10.5196 3.39464 10.7071 3.20711C10.8946 3.01957 11 2.76522 11 2.5C11 2.23478 10.8946 1.98043 10.7071 1.79289C10.5196 1.60536 10.2652 1.5 10 1.5C9.73478 1.5 9.48043 1.60536 9.29289 1.79289C9.10536 1.98043 9 2.23478 9 2.5C9 2.76522 9.10536 3.01957 9.29289 3.20711C9.48043 3.39464 9.73478 3.5 10 3.5ZM21 3C21.2652 3 21.5196 2.89464 21.7071 2.70711C21.8946 2.51957 22 2.26522 22 2C22 1.73478 21.8946 1.48043 21.7071 1.29289C21.5196 1.10536 21.2652 1 21 1C20.7348 1 20.4804 1.10536 20.2929 1.29289C20.1054 1.48043 20 1.73478 20 2C20 2.26522 20.1054 2.51957 20.2929 2.70711C20.4804 2.89464 20.7348 3 21 3ZM21 14.5C21.2652 14.5 21.5196 14.3946 21.7071 14.2071C21.8946 14.0196 22 13.7652 22 13.5C22 13.2348 21.8946 12.9804 21.7071 12.7929C21.5196 12.6054 21.2652 12.5 21 12.5C20.7348 12.5 20.4804 12.6054 20.2929 12.7929C20.1054 12.9804 20 13.2348 20 13.5C20 13.7652 20.1054 14.0196 20.2929 14.2071C20.4804 14.3946 20.7348 14.5 21 14.5ZM19.5 19C19.7652 19 20.0196 18.8946 20.2071 18.7071C20.3946 18.5196 20.5 18.2652 20.5 18C20.5 17.7348 20.3946 17.4804 20.2071 17.2929C20.0196 17.1054 19.7652 17 19.5 17C19.2348 17 18.9804 17.1054 18.7929 17.2929C18.6054 17.4804 18.5 17.7348 18.5 18C18.5 18.2652 18.6054 18.5196 18.7929 18.7071C18.9804 18.8946 19.2348 19 19.5 19Z"
        fill={fill}
      />
    </Svg>
  ),
  Home: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z"
        fill={colors.grey300}
      />
    </Svg>
  ),
  HomeFilled: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M4 21V9L12 3L20 9V21H14V14H10V21H4Z" fill={fill} />
    </Svg>
  ),
  Place: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5ZM12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2ZM12 4C10.6739 4 9.40215 4.52678 8.46447 5.46447C7.52678 6.40215 7 7.67392 7 9C7 10 7 12 12 18.71C17 12 17 10 17 9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4Z"
        fill={colors.grey300}
      />
    </Svg>
  ),
  PlaceFilled: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
        fill={fill}
      />
    </Svg>
  ),
  Favorite: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22.7813 9.00004C22.665 8.64127 22.4449 8.32506 22.1489 8.09142C21.8528 7.85778 21.4941 7.71723 21.1181 7.68754L15.8128 7.25911L13.7653 2.30817C13.6214 1.95826 13.3768 1.659 13.0625 1.4484C12.7482 1.2378 12.3783 1.12537 12 1.12537C11.6217 1.12537 11.2519 1.2378 10.9375 1.4484C10.6232 1.659 10.3786 1.95826 10.2347 2.30817L8.18907 7.26004L2.88376 7.68754C2.50709 7.71861 2.14801 7.86031 1.85163 8.09484C1.55526 8.32937 1.33482 8.64627 1.21801 9.00571C1.1012 9.36516 1.09324 9.75111 1.19512 10.1151C1.297 10.479 1.50418 10.8047 1.79063 11.0513L5.83876 14.5425L4.60126 19.7644C4.511 20.1326 4.53235 20.5193 4.66259 20.8753C4.79283 21.2313 5.02608 21.5404 5.33261 21.7634C5.63915 21.9864 6.00512 22.1131 6.38392 22.1275C6.76272 22.1418 7.1372 22.043 7.45969 21.8438L12 19.0491L16.5403 21.8438C16.8627 22.0417 17.2366 22.1395 17.6146 22.1248C17.9926 22.1101 18.3577 21.9835 18.6638 21.7612C18.9699 21.5388 19.2031 21.2307 19.3339 20.8758C19.4647 20.5208 19.4873 20.135 19.3988 19.7672L18.1613 14.5454L22.2094 11.0541C22.4975 10.807 22.7057 10.4797 22.8076 10.114C22.9094 9.74829 22.9002 9.36055 22.7813 9.00004ZM16.1747 13.2844C16.0186 13.419 15.9025 13.5939 15.839 13.7899C15.7755 13.986 15.7671 14.1958 15.8147 14.3963L17.0231 19.5L12.5897 16.7738C12.4124 16.6647 12.2082 16.6069 12 16.6069C11.7918 16.6069 11.5876 16.6647 11.4103 16.7738L6.97688 19.5L8.18532 14.4C8.23292 14.1995 8.22451 13.9898 8.16103 13.7937C8.09754 13.5976 7.98141 13.4227 7.82532 13.2882L3.86251 9.86629L9.05626 9.44723C9.26294 9.43063 9.46101 9.35722 9.6286 9.23513C9.79619 9.11304 9.92678 8.947 10.0059 8.75536L12 3.92723L13.9941 8.75536C14.0732 8.947 14.2038 9.11304 14.3714 9.23513C14.539 9.35722 14.7371 9.43063 14.9438 9.44723L20.1375 9.86629L16.1747 13.2844Z"
        fill={fill}
      />
    </Svg>
  ),
  FavoriteFilled: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.9647 10.7672L17.7459 14.4075L19.0313 19.8516C19.1022 20.1471 19.0839 20.457 18.9788 20.7422C18.8736 21.0274 18.6864 21.275 18.4406 21.4537C18.1948 21.6325 17.9015 21.7344 17.5979 21.7466C17.2942 21.7588 16.9937 21.6807 16.7344 21.5222L12 18.6085L7.26282 21.5222C7.00353 21.6798 6.70341 21.7571 6.40026 21.7445C6.0971 21.7319 5.80446 21.6298 5.55919 21.4512C5.31392 21.2726 5.12698 21.0254 5.02191 20.7407C4.91685 20.4561 4.89835 20.1467 4.96875 19.8516L6.25875 14.4075L2.04 10.7672C1.81059 10.5689 1.64468 10.3075 1.56299 10.0155C1.48129 9.72348 1.48743 9.41388 1.58064 9.12534C1.67385 8.83681 1.85 8.58213 2.08709 8.39311C2.32418 8.2041 2.6117 8.08912 2.91375 8.06253L8.445 7.61628L10.5788 2.45253C10.6942 2.17111 10.8908 1.93039 11.1435 1.76097C11.3961 1.59156 11.6935 1.5011 11.9977 1.5011C12.3019 1.5011 12.5992 1.59156 12.8518 1.76097C13.1045 1.93039 13.3011 2.17111 13.4166 2.45253L15.5494 7.61628L21.0806 8.06253C21.3833 8.08813 21.6716 8.20247 21.9096 8.39122C22.1475 8.57998 22.3245 8.83476 22.4183 9.12364C22.5121 9.41253 22.5185 9.72267 22.4368 10.0152C22.3552 10.3077 22.189 10.5697 21.9591 10.7682L21.9647 10.7672Z"
        fill={fill}
      />
    </Svg>
  ),
  Web: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM4.98667 12.6044H7.21778C7.25333 13.4133 7.36622 14.2169 7.55556 15.0044H5.63556C5.27752 14.2497 5.05774 13.4368 4.98667 12.6044ZM12.6044 7.80444V5.05778C13.4611 5.38331 14.1649 6.01744 14.5778 6.83556C14.76 7.144 14.9209 7.46489 15.0578 7.79556L12.6044 7.80444ZM15.4667 9.00444C15.6729 9.78933 15.7956 10.5938 15.8311 11.4044H12.6044V9.00444H15.4667ZM11.3956 5.05778V7.80444H8.94222C9.07934 7.47351 9.23975 7.1527 9.42222 6.84444C9.83331 6.02298 10.5374 5.38548 11.3956 5.05778ZM11.3956 9.00444V11.4044H8.17778C8.21333 10.5938 8.336 9.78933 8.54222 9.00444H11.3956ZM7.21778 11.3956H4.98667C5.05774 10.5632 5.27752 9.75033 5.63556 8.99556H7.55556C7.36586 9.7828 7.25274 10.5865 7.21778 11.3956ZM8.17778 12.6044H11.3956V15.0044H8.54222C8.33603 14.2196 8.21386 13.4151 8.17778 12.6044ZM11.4044 16.16V18.9067C10.5478 18.5811 9.84395 17.947 9.43111 17.1289C9.24863 16.8206 9.08823 16.4998 8.95111 16.1689L11.4044 16.16ZM12.6044 18.9067V16.2044H15.0578C14.9207 16.5354 14.7603 16.8562 14.5778 17.1644C14.1649 17.9826 13.4611 18.6167 12.6044 18.9422V18.9067ZM12.6044 14.96V12.56H15.8222C15.7861 13.3707 15.664 14.1752 15.4578 14.96H12.6044ZM16.7911 12.56H19.0222C18.9511 13.3924 18.7314 14.2052 18.3733 14.96H16.4444C16.6311 14.1867 16.744 13.3982 16.7822 12.6044L16.7911 12.56ZM16.7911 11.36C16.7504 10.5656 16.6343 9.77688 16.4444 9.00444H18.3644C18.7227 9.76 18.9422 10.5724 19.0133 11.4044L16.7911 11.36ZM17.68 7.80444H16.0889C15.801 6.99582 15.3837 6.23931 14.8533 5.56444C15.9595 6.06096 16.9202 6.83205 17.6444 7.80444H17.68ZM9.14667 5.56444C8.61628 6.23931 8.199 6.99582 7.91111 7.80444H6.35556C7.07975 6.83205 8.04055 6.06096 9.14667 5.56444ZM6.34667 16.2311H7.91111C8.199 17.0397 8.61628 17.7962 9.14667 18.4711C8.03749 17.9671 7.0764 17.1866 6.35556 16.2044L6.34667 16.2311ZM14.8444 18.4711C15.3748 17.7962 15.7921 17.0397 16.08 16.2311H17.6444C16.9158 17.1905 15.9554 17.949 14.8533 18.4356L14.8444 18.4711Z"
        fill={fill}
      />
    </Svg>
  ),
  Map: ({size = 24, fill = colors.black}: SvgIconsProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 19.923L9 17.823L5.042 19.353C4.786 19.4484 4.54833 19.4207 4.329 19.27C4.10967 19.1194 4 18.9074 4 18.634V6.40403C4 6.22536 4.04333 6.06236 4.13 5.91503C4.21667 5.76769 4.34267 5.66536 4.508 5.60803L9 4.07703L15 6.17703L18.958 4.64703C19.214 4.55169 19.4517 4.56969 19.671 4.70103C19.8903 4.83236 20 5.02836 20 5.28903V17.673C20 17.8644 19.947 18.0304 19.841 18.171C19.7357 18.3124 19.5937 18.4117 19.415 18.469L15 19.923ZM14.5 18.703V7.00303L9.5 5.25803V16.958L14.5 18.703ZM15.5 18.703L19 17.55V5.70003L15.5 7.00403V18.703ZM5 18.3L8.5 16.958V5.25803L5 6.45003V18.3Z"
        fill={fill}
      />
    </Svg>
  ),
};

export default SvgIcon;
