const React = require('react')

module.exports = function useOnce(once, cleanup) {
    React.useEffect(function() {
        once()
        if (cleanup) {
            return cleanup
        }
    }, [])
}
