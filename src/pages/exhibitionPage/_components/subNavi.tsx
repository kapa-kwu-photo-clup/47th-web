import { NavLink } from 'react-router-dom';

export default function SubNavi() {
  return (
    <>
      <div className="flex flex-col gap-4 mb-5">
        <p className="lg:text-5xl text-3xl font-bold">전시</p>
        <p className="lg:text-xl text-lg font-base text-gray_71">
          사진을 눌러 크게 감상할 수 있습니다.
        </p>
      </div>

      <nav className="w-full border-b-4 border-lightGray text-gray_bd flex flex-row gap-12 justify-center lg:text-xl text-lg font-base">
        <NavLink
          to="/exhibition/spring"
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-springPink border-b-4 border-springPink py-4'
              : 'py-4'
          }
        >
          봄
        </NavLink>
        <NavLink
          to="/exhibition/summer"
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-summerGreen_01 border-b-4 border-summerGreen_01 py-4'
              : 'py-4'
          }
        >
          여름
        </NavLink>
        <NavLink
          to="/exhibition/fall"
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-fallPurple border-b-4 border-fallPurple py-4'
              : 'py-4'
          }
        >
          가을
        </NavLink>
        <NavLink
          to="/exhibition/winter"
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-winterBlue border-b-4 border-winterBlue py-4'
              : 'py-4'
          }
        >
          겨울
        </NavLink>
      </nav>
    </>
  );
}
