"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import { Modal } from "flowbite-react";
import welcomeImage from "../../../../public/welcome.png";

interface SignUpProps {
  openSignUpModal: boolean;
  setOpenSignUpModal: Dispatch<SetStateAction<boolean>>;
}

const SignUpModal = (props: SignUpProps) => {
  const { openSignUpModal, setOpenSignUpModal } = props;

  const handleSignUp = () => {
    // TODO: access token 있으면 이미 가입된 회원입니다. alert
    window.open(`${process.env.NEXT_PUBLIC_GITHUB_AUTHORIZE_URL}${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}
${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}${process.env.NEXT_PUBLIC_API_ENDPOINT}${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_API_URL}`);
  };

  const onCloseSignUpModal = () => {
    setOpenSignUpModal(false);
  };

  return (
    <>
      <Modal
        dismissible
        show={openSignUpModal}
        size="lg"
        onClose={onCloseSignUpModal}
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
                회원가입
              </h3>
              <div className="flex flex-col">
                <div>소셜 계정으로 회원가입</div>
                <div className="flex items-center justify-center">
                  <button onClick={handleSignUp}>
                    <AiFillGithub size="48px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUpModal;
