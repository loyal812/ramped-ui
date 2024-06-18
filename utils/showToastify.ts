import { toast, ToastOptions } from 'react-toastify';

interface ToastifyOptions extends ToastOptions {
    message: string; // Custom property for the message
}

export const showToastify = ({ message, ...options }: ToastifyOptions) => {
    // Call the toast function with the message and spread the rest of the options
    toast(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        ...options, // Allows for overriding the default options or specifying additional ones
    });
};
