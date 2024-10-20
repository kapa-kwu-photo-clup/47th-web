import { NavLink } from 'react-router-dom';

export default function SubNavi() {
  return (
    <>
      <div className="flex flex-col gap-4 mb-5">
        <p className="text-5xl font-bold">전시</p>
        <p className="text-xl font-base text-gray_71">
          사진을 눌러 크게 감상할 수 있습니다.
        </p>
      </div>

      <nav className="w-full border-b-2 border-lightGray text-gray_bd flex flex-row gap-12 justify-center text-xl font-base">
        <NavLink
          to="/exhibition/spring"
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-springPink border-b-2 border-springPink py-4'
              : 'py-4'
          }
        >
          봄
        </NavLink>
        <NavLink
          to="/exhibition/summer"
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-summerGreen_01 border-b-2 border-summerGreen_01 py-4'
              : 'py-4'
          }
        >
          여름
        </NavLink>
        <NavLink
          to="/exhibition/fall"
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-fallPurple border-b-2 border-fallPurple py-4'
              : 'py-4'
          }
        >
          가을
        </NavLink>
        <NavLink
          to="/exhibition/winter"
          className={({ isActive }) =>
            isActive
              ? 'font-bold text-winterBlue border-b-2 border-winterBlue py-4'
              : 'py-4'
          }
        >
          겨울
        </NavLink>
      </nav>
    </>
  );
}
