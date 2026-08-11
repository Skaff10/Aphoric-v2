"use client";

function ScrollToBottomButton() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return <button className="cursor-pointer" onClick={scrollToBottom}>start a project</button>;
}

export default ScrollToBottomButton;