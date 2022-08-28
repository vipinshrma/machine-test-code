import Button from "../components/Button";

export default {
    title: 'Button',
    component: Button
}

const Template = (args) => <Button  {...args} />

export const Red = Template.bind({})
Red.args = {
    label: "Press me",
    size: 'small',
    color: 'warning'
}