import * as PropTypes from "prop-types";
import * as React from "react";

interface NavigatorProps {
  children: ((
    navigate: (url: string, replace?: boolean, preserveQs?: boolean) => any
  ) => React.ReactElement<any>);
}

const Navigator: React.StatelessComponent<NavigatorProps> = (
  { children },
  { router }
) => {
  const {
    history,
    route: {
      location: { search }
    }
  } = router;
  const navigate = (url: string, replace = false, preserveQs = false) => {
    const targetUrl = preserveQs ? url + search : url;
    replace ? history.replace(targetUrl) : history.push(targetUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return children(navigate);
};
Navigator.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired
    }).isRequired
  })
};
Navigator.displayName = "Navigator";

export default Navigator;
