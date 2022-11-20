import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

import Layout from "../components/Layout";

function Login() {
	const router = useRouter();
	const [isInputText, setInputType] = useState(false);
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<Layout title="Login">
			{/* navbar */}
			<nav className="flex justify-between items-center mx-4 md:mx-12 py-4">
				<div className="text-center inline-flex justify-center items-center gap-8">
					<button onClick={() => router.back()}>
						<ArrowLeftIcon className="w-6 h-6 text-dim-gray" />
					</button>
					<Link href="/" className="font-black">
						FOODY
					</Link>
				</div>
				<Link
					href={"/signup"}
					className="px-3 py-2 text-xs bg-white ring-1 ring-gray rounded-[3px] shadow-sm hover:text-white hover:bg-dark-blue hover:ring-8 hover:ring-white"
				>
					Create an account
				</Link>
			</nav>

			{/* main content */}
			<main>
				{/* form container */}
				<div className="mx-4 my-8 grid place-items-center gap-8">
					{/* heading */}
					<h1 className="text-center font-black text-3xl">Login</h1>
					{/* authenticate with google */}
					<button
						className="bg-dark-blue px-8 py-2 w-[250px] md:w-[300px] 
            text-center text-xs rounded-[3px] hover:bg-blue text-white shadow-md "
					>
						Continue with google
					</button>
					{/* divider */}
					<p className="text-center text-dim-gray text-xs">
						Or login with email
					</p>

					{/* email input */}
					<div className="flex flex-col gap-1">
						<label
							htmlFor="email"
							className="text-dim-gray font-semibold text-xs"
						>
							Email address
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="ring-dark-blue rounded-[3px] outline-dark-blue text-xs px-2 py-2 w-[250px] md:w-[300px]"
							style={{ border: "1px solid #2563eb" }}
							placeholder="example@gmail.com"
							value={inputs.email}
							onChange={(e) => handleOnChange(e)}
						/>
					</div>

					{/* password input */}
					<div className="flex flex-col gap-1 -mt-3">
						<div className="inline-flex justify-between">
							<label
								htmlFor="password"
								className="text-dim-gray font-semibold text-xs"
							>
								Password
							</label>
							<p className="text-left text-xs text-dark-blue hover:text-blue cursor-pointer">
								Forgot Password?
							</p>
						</div>
						<div className="inline-flex justify-center items-center gap-1 w-[250px] md:w-[300px] rounded-[3px] outline outline-1 outline-dark-blue px-2 py-2">
							<input
								type={`${isInputText ? "text" : "password"}`}
								name="password"
								id="password"
								value={inputs.password}
								onChange={(e) => handleOnChange(e)}
								className="text-xs w-full outline-none"
								placeholder="password"
							/>
							<button onClick={() => setInputType(!isInputText)}>
								{isInputText ? (
									<EyeOffIcon className="w-5 h-5 text-dim-gray" />
								) : (
									<EyeIcon className="w-5 h-5 text-dim-gray" />
								)}
							</button>
						</div>
					</div>

					{/* login button */}
					<button className="inline-flex justify-center items-center bg-dark-green px-8 py-2 w-[250px] md:w-[300px] text-center text-xs rounded-[3px] hover:bg-green text-white shadow-md -mt-2">
						login
					</button>
				</div>
			</main>
		</Layout>
	);
}

export default Login;
