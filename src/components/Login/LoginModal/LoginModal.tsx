"use client";

import { Button, Modal } from "flowbite-react";

import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import SignUpModal from "@/components/SignUp/SignUpModal/SignUpModal";
import { useState } from "react";
import welcomeImage from "../../../../public/welcome.png";

const LoginModal = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const onCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const handleLogin = () => {
    window.location.assign(
      `${process.env.NEXT_PUBLIC_GITHUB_AUTHORIZE_URL}${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}${process.env.NEXT_PUBLIC_GITHUB_API_REDIRECT_URI_CALLBACK}`,
    );
  };

  const handleOpenSignInModal = () => {
    setOpenLoginModal(false);
    setOpenSignUpModal(true);
  };

  return (
    <>
      <Button
        size="md"
        pill={true}
        outline={true}
        onClick={() => setOpenLoginModal(true)}
      >
        로그인
      </Button>
      <Modal
        dismissible
        show={openLoginModal}
        size="xl"
        onClose={onCloseLoginModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-row p-4 justify-between">
            <div className="flex flex-col items-center justify-center w-52">
              <Image src={welcomeImage} alt="welcome image" />
              <h3>환영합니다!</h3>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                로그인
              </h3>
              <div className="flex flex-col">
                <div className="flex items-center justify-center">
                  <button onClick={handleLogin}>
                    <AiFillGithub size="48px" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                아직 회원이 아니신가요?&nbsp;
                <Link
                  href="/i/flow/signup"
                  className="text-cyan-700 hover:underline dark:text-cyan-500"
                >
                  <div onClick={handleOpenSignInModal}>회원가입</div>
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <SignUpModal
        openSignUpModal={openSignUpModal}
        setOpenSignUpModal={setOpenSignUpModal}
      />
    </>
  );
};

export default LoginModal;
