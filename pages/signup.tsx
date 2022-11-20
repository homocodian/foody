import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

import Layout from "@/components/Layout";

function Signup() {
	const router = useRouter();
	const [inputType, setInputType] = useState({
		isPasswordTypeText: false,
		isConfirmPasswordText: false,
	});
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleInputTypeChange = (name: "password" | "confirmPassword") => {
		if (name === "password") {
			setInputType((prev) => ({
				...prev,
				isPasswordTypeText: !prev.isPasswordTypeText,
			}));
		} else {
			setInputType((prev) => ({
				...prev,
				isConfirmPasswordText: !prev.isConfirmPasswordText,
			}));
		}
	};

	return (
		<Layout title="Signup">
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
					href={"/login"}
					className="px-6 py-2 text-xs bg-white ring-1 ring-gray rounded-[3px] shadow-sm hover:text-white hover:bg-dark-blue hover:ring-8 hover:ring-white"
				>
					Login
				</Link>
			</nav>

			{/* main content */}
			<main>
				{/* form container */}
				<div className="mx-4 my-8 grid place-items-center gap-4">
					{/* heading */}
					<h1 className="text-center font-black text-3xl">Signup</h1>
					{/* use google for authentication */}
					<button
						className="bg-dark-blue px-8 py-2 w-[250px] md:w-[300px] 
            text-center text-xs rounded-[3px] hover:bg-blue text-white shadow-md "
					>
						Continue with google
					</button>

					{/* divider */}
					<p className="text-center text-dim-gray text-xs">
						Or signup with email
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
							value={inputs.email}
							onChange={(e) => handleInputChange(e)}
							className="ring-dark-blue rounded-[3px] outline-dark-blue text-xs px-2 py-2 w-[250px] md:w-[300px]"
							style={{ border: "1px solid #2563eb" }}
							placeholder="example@gmail.com"
						/>
						{/* <p className={`text-danger text-xs opacity-80`}>Invalid email</p> */}
					</div>

					{/* password input */}
					<div className="flex flex-col gap-1">
						<label
							htmlFor="password"
							className="text-dim-gray font-semibold text-xs"
						>
							Password
						</label>
						<div className="inline-flex justify-center items-center gap-1 w-[250px] md:w-[300px] rounded-[3px] outline outline-1 outline-dark-blue px-2 py-2">
							<input
								type={`${inputType.isPasswordTypeText ? "text" : "password"}`}
								name="password"
								id="password"
								value={inputs.password}
								onChange={(e) => handleInputChange(e)}
								className="text-xs w-full outline-none"
								placeholder="password"
							/>
							<button onClick={() => handleInputTypeChange("password")}>
								{inputType.isPasswordTypeText ? (
									<EyeOffIcon className="w-5 h-5 text-dim-gray" />
								) : (
									<EyeIcon className="w-5 h-5 text-dim-gray" />
								)}
							</button>
						</div>
						{/* <ul>
							<li className="text-danger text-xs opacity-80">
								Must have atleast 8 characters
							</li>
							<li className="text-danger text-xs opacity-80">
								Must have a symbol
							</li>
							<li className="text-danger text-xs opacity-80">
								Must have a uppercase and lowercase
							</li>
						</ul> */}
					</div>

					{/* confirm password input */}
					<div className="flex flex-col gap-1">
						<label
							htmlFor="confirm-password"
							className="text-dim-gray font-semibold text-xs"
						>
							Confirm Password
						</label>
						<div className="inline-flex justify-center items-center gap-1 w-[250px] md:w-[300px] rounded-[3px] outline outline-1 outline-dark-blue px-2 py-2">
							<input
								type={`${
									inputType.isConfirmPasswordText ? "text" : "password"
								}`}
								name="confirmPassword"
								id="confirm-password"
								value={inputs.confirmPassword}
								onChange={(e) => handleInputChange(e)}
								className="text-xs w-full outline-none"
								placeholder="password"
							/>
							<button onClick={() => handleInputTypeChange("confirmPassword")}>
								{inputType.isConfirmPasswordText ? (
									<EyeOffIcon className="w-5 h-5 text-dim-gray" />
								) : (
									<EyeIcon className="w-5 h-5 text-dim-gray" />
								)}
							</button>
						</div>
						{/* <p className={`text-danger text-xs opacity-80`}>
							password does not match
						</p> */}
					</div>

					{/* signup button */}
					<button className="inline-flex justify-center items-center disabled:bg-green bg-dark-green px-8 py-2 w-[250px] md:w-[300px] text-center text-xs rounded-[3px] hover:bg-green text-white shadow-md mt-2">
						signup
					</button>
				</div>
			</main>
		</Layout>
	);
}

export default Signup;
