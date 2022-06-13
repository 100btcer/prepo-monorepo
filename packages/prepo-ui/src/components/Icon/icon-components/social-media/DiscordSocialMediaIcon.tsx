import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name'>

const DiscordSocialMediaIcon: React.FC<Props> = ({
  color = 'white',
  width = '22',
  height = '18',
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M18.952 2.672C17.048 1.141 14.036 0.881995 13.908 0.870995C13.707 0.853995 13.516 0.967995 13.434 1.152C13.428 1.164 13.362 1.315 13.289 1.55C14.548 1.762 16.095 2.19 17.495 3.059C17.719 3.198 17.788 3.493 17.649 3.718C17.559 3.864 17.402 3.94399 17.242 3.94399C17.156 3.94399 17.069 3.921 16.99 3.872C14.584 2.38 11.578 2.305 11 2.305C10.422 2.305 7.415 2.38 5.011 3.872C4.786 4.012 4.492 3.942 4.352 3.718C4.212 3.493 4.282 3.199 4.506 3.059C5.906 2.191 7.452 1.762 8.712 1.55C8.638 1.314 8.572 1.164 8.567 1.152C8.484 0.967995 8.294 0.851995 8.092 0.871995C7.965 0.881995 4.953 1.141 3.023 2.694C2.015 3.625 0 9.073 0 13.783C0 13.866 0.022 13.948 0.063 14.02C1.454 16.463 5.248 17.103 6.113 17.131C6.118 17.131 6.123 17.131 6.128 17.131C6.281 17.131 6.425 17.058 6.515 16.934L7.39 15.732C5.031 15.122 3.826 14.087 3.756 14.026C3.558 13.851 3.539 13.549 3.714 13.351C3.889 13.153 4.19 13.134 4.388 13.308C4.417 13.334 6.636 15.217 11 15.217C15.372 15.217 17.591 13.326 17.613 13.307C17.811 13.135 18.113 13.153 18.287 13.352C18.461 13.55 18.442 13.851 18.245 14.025C18.175 14.087 16.97 15.121 14.611 15.731L15.486 16.933C15.576 17.057 15.72 17.13 15.873 17.13C15.878 17.13 15.883 17.13 15.888 17.13C16.753 17.103 20.547 16.463 21.938 14.019C21.978 13.947 22 13.866 22 13.783C22 9.073 19.985 3.625 18.952 2.672ZM7.891 11.87C6.967 11.87 6.217 11.013 6.217 9.957C6.217 8.901 6.966 8.04399 7.891 8.04399C8.816 8.04399 9.565 8.901 9.565 9.957C9.565 11.013 8.816 11.87 7.891 11.87ZM14.109 11.87C13.185 11.87 12.435 11.013 12.435 9.957C12.435 8.901 13.184 8.04399 14.109 8.04399C15.033 8.04399 15.783 8.901 15.783 9.957C15.783 11.013 15.033 11.87 14.109 11.87Z"
      fill={color}
    />
  </svg>
)

export default DiscordSocialMediaIcon