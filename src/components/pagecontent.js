import React from "react";
import AccountPage from "./accountpage";
import ClientPage from "./clientpage";
import HomePage from "./homepage";

class PageContent extends React.Component {
    render() {
        return(
            <div>
                PageContent Component
                <HomePage />
                <AccountPage />
                <ClientPage />
            </div>
        );
    }
}

export default PageContent;