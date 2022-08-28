import Typography from "../components/TypoGraphy"

export default {
    title: 'Typography',
    component: Typography
}

const Template = (args) => <Typography  {...args} />

export const SimpleText = Template.bind({})
SimpleText.args = {
    label: "Hello",
    // handleClick: 'small',
    color: 'green',
    size: 30
}