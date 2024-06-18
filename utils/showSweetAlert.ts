import Swal, { SweetAlertResult } from 'sweetalert2';

interface AlertOptions {
    title: string;
    text?: string;
    icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
    confirmButtonText?: string;
    showCancelButton?: boolean; // Added option for cancel button
    cancelButtonText?: string; // Text for the cancel button
}

export const showSweetAlert = ({
    title,
    text,
    icon,
    confirmButtonText = 'OK',
    showCancelButton = false, // Default to false unless specified
    cancelButtonText = 'Cancel', // Default cancel button text
}: AlertOptions): Promise<SweetAlertResult> => {
    return Swal.fire({
        title,
        text,
        icon,
        confirmButtonText,
        showCancelButton,
        cancelButtonText,
    });
};
