const { useEffect } = require('react');

module.exports = function useOnce(once, cleanup) {
    useEffect(() => {
        once();
        return cleanup;
    }, []);
}