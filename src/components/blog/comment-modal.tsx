import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { ReactCusdis } from 'react-cusdis';

interface Props {
  id: string;
  title: string;
  show: boolean;
  close: () => void;
}

const CommentModal = ({ id, title, show, close }: Props) => {
  useEffect(() => {
    // Prevent scrolling when modal is visible.
    show && (document.body.style.overflow = 'hidden');
    !show && (document.body.style.overflow = 'unset');
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="absolute flex w-full h-full bg-black/70 top-0 left-0 z-50 justify-center items-center">
      <div className="fixed inset-0 flex items-center w-full h-modal md:h-full">
        <div className="relative p-4 w-full h-full md:h-auto">
          <div
            style={{ maxWidth: 800 }}
            className="relative rounded-lg mx-auto"
          >
            <div
              style={{ height: 600, maxWidth: 800, colorScheme: 'dark' }}
              className="relative flex p-6 bg-cusdis rounded-lg overflow-y-auto"
            >
              <button
                type="button"
                className="absolute z-50 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="popup-modal"
                onClick={close}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="relative flex-1 mt-6">
                <ReactCusdis
                  attrs={{
                    host: 'https://cusdis.com',
                    appId: `${process.env.GATSBY_CUSDIS_APP_ID}`,
                    pageId: id,
                    pageTitle: title,
                    pageUrl: window.location.href,
                    theme: 'dark'
                  }}
                  style={{
                    paddingBottom: '30px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
