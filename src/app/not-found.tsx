import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900 p-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="text-9xl font-black text-slate-200 select-none">404</div>
                <h2 className="text-3xl font-heading font-bold text-slate-800">
                    Page Not Found
                </h2>
                <p className="text-slate-600 font-medium">
                    Oops! It seems this page has gone for a walk. Let&apos;s get you back on track.
                </p>
                <div className="flex justify-center pt-4">
                    <Link href="/">
                        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/40">
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
