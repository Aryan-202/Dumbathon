"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const [failed, setFailed] = useState(false);

  return (
    <div className="min-h-screen bg-black text-red-600 font-mono p-4 flex flex-col items-center select-none">

      {/* Old school warning ticker */}
      <div className="w-full border-y-4 border-red-800 bg-red-950/30 overflow-hidden relative h-10 flex items-center">
        <div className="whitespace-nowrap animate-marquee absolute text-xl font-bold tracking-widest">
          <span className="text-yellow-500">⚠ WARNING ⚠</span> ZOMBIE BREACH IN SECTOR 4 <span className="text-yellow-500">⚠ WARNING ⚠</span> THEY ARE IN THE VENTS <span className="text-yellow-500">⚠ WARNING ⚠</span> EVACUATE IMMEDIATELY <span className="text-yellow-500">⚠ WARNING ⚠</span>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold underline mt-10 mb-4 tracking-widest text-center decoration-double">
        SURVIVOR LOGIN V1.0
      </h1>

      <p className="mb-8 text-center bg-red-950 p-2 border-2 border-dashed border-red-800 font-bold animate-pulse">
        ENTER CREDENTIALS QUICKLY. THEY HEARD YOU.
      </p>

      {/* Old Web Layout Form inside a Table */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("ACCESS DENIED! RECORD NOT FOUND IN BUNKER DATABASES.");
          setFailed(true);
        }}
        className="w-full max-w-md"
      >
        <table className="border-4 border-red-800 bg-black w-full" cellPadding={12}>
          <tbody>
            <tr>
              <td colSpan={2} className="bg-red-900 font-bold text-black text-center text-xl sm:text-2xl border-b-4 border-red-800">
                BUNKER ACCESS TERMINAL
              </td>
            </tr>
            <tr>
              <td className="text-right border-b border-r border-red-800 font-bold sm:text-lg w-1/3">
                USERNAME:
              </td>
              <td className="border-b border-red-800">
                <input
                  type="text"
                  disabled={failed}
                  className="bg-black text-red-500 border-2 border-red-600 p-2 w-full outline-none focus:bg-red-950 font-mono disabled:opacity-30 transition-colors"
                  placeholder="survivor_99"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="text-right border-b border-r border-red-800 font-bold sm:text-lg">
                PASSWORD:
              </td>
              <td className="border-b border-red-800">
                <input
                  type="password"
                  disabled={failed}
                  className="bg-black text-red-500 border-2 border-red-600 p-2 w-full outline-none focus:bg-red-950 font-mono disabled:opacity-30 transition-colors"
                  placeholder="*********"
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center p-6">
                {!failed ? (
                  <button
                    type="submit"
                    className="bg-red-800 text-black font-black text-2xl px-6 py-3 border-4 border-outset border-red-500 hover:bg-red-600 hover:text-white cursor-pointer active:translate-y-1 w-full transition-all"
                  >
                    [ INITIATE LOGIN ]
                  </button>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <p className="text-red-500 animate-pulse font-bold text-lg md:text-xl border border-red-800 bg-red-950/50 py-2">
                       ACCOUNT NOT FOUND
                    </p>
                    <button
                      type="button"
                      onClick={() => router.push('/sign-up')}
                      className="bg-yellow-600 text-black font-black text-2xl px-6 py-3 border-4 border-outset border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer active:translate-y-1 w-full transition-all"
                    >
                      [ INITIATE SIGN UP ]
                    </button>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <div className="mt-16 text-sm text-red-900 text-center font-bold flex flex-col items-center space-y-2">
        <p>Best viewed in Netscape Navigator 3.0</p>
        <p>Copyright © 1999 Doomsday Preppers Unltd.</p>
        <Link href="/" className="inline-block mt-4 text-red-500 hover:text-red-400 border border-red-900 px-3 py-1 hover:bg-red-900 hover:text-black transition-colors">
          {'<'} ABORT MISSION. RUN AWAY. {'>'}
        </Link>
      </div>

      <style>{`
        @keyframes marquee {
          0% { left: 100%; transform: translateX(0); }
          100% { left: 0%; transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
