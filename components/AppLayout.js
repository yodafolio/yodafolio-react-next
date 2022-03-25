import PropTypes from 'prop-types';

const AppLayout = ({children}) => {
    return (
        <>
            <h1>AppLayout</h1>
            { children }
        </>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;