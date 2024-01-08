export default function Footer() {
    return (
        <>
            <footer className="shadow dark:#f5f5f5">
                <div className="w-full mx-auto max-w-screen-xl p-2 flex flex-col md:flex-row justify-between items-center">
                    <span className="text-sm text-gray-500 text-center dark:text-gray-400 mb-3 md:mb-0">
                        © 2023 <a href="https://www.github.com/gokuthecoder" className="hover:underline">Gokuthecoder</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <li className="me-4 md:me-6">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="me-4 md:me-6">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="me-4 md:me-6">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}