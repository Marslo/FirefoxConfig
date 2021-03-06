var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+SingaporeProxy", {
    "+SingaporeProxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^[^:]+:\/\/::1\//.test(url) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 165.225.96.34:10015";
    }
});