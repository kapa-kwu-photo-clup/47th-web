export default function Footer() {
  return (
    <footer>
      <div className=" bg-lightGray text-sm py-16 px-3 mt-40">
        <div className="sm:w-3/5 mx-auto ">
          <p className="mx-auto text-center">
            ©2024. KAPA. All rights reserved.
          </p>
          <div className="flex flex-row mx-auto justify-center">
            <p>Produced by &nbsp;</p>
            <button
              className="hover:underline"
              onClick={() =>
                window.open('https://github.com/jamooooong', '_blank')
              }
            >
              jamooooong
            </button>
            <p> &nbsp;and&nbsp; </p>
            <button
              className="hover:underline"
              onClick={() =>
                window.open('https://github.com/winnaba61', '_blank')
              }
            >
              winA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
