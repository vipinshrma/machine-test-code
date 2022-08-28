import SnackbarToast from "../components/Snackbar"

export default {
    title: 'Snackbar',
    component: SnackbarToast
}

const Template = (args) => <SnackbarToast  {...args} />

export const SuccessSnackbar = Template.bind({})
SuccessSnackbar.args = {
    message: "Hello world",
    messageType: 'success',
    isOpen: false
}

export const ErrorSnackbar = Template.bind({})
ErrorSnackbar.args = {
    message: "Hello world",
    messageType: 'error',
    isOpen: false
}