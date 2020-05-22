import {ParentContext} from '../ParentContext';
import MemberAvatar from '../common/MemberGravatar';
import ActionButton from '../common/ActionButton';

const React = require('react');

class FreeAccountHomePage extends React.Component {
    static contextType = ParentContext;

    handleSignout(e) {
        e.preventDefault();
        this.context.onAction('signout');
    }

    renderHeader() {
        const memberEmail = this.context.member.email;

        return (
            <>
                <div style={{paddingLeft: '16px', paddingRight: '16px', color: '#A6A6A6', fontSize: '1.2rem', lineHeight: '1.0em'}}>
                    Signed in as
                </div>
                <div style={{paddingLeft: '16px', paddingRight: '16px', paddingBottom: '9px'}}>
                    {memberEmail}
                </div>
            </>
        );
    }

    renderUserAvatar() {
        const avatarImg = (this.context.member && this.context.member.avatar_image);

        const avatarContainerStyle = {
            position: 'relative',
            display: 'flex',
            width: '64px',
            height: '64px',
            marginBottom: '6px',
            borderRadius: '100%',
            boxShadow: '0 0 0 3px #fff',
            border: '1px solid gray',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center'
        };

        return (
            <div style={avatarContainerStyle}>
                <MemberAvatar gravatar={avatarImg} style={{userIcon: {color: 'black', width: '45px', height: '45px'}}} />
            </div>
        );
    }

    renderUserHeader() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '12px'}}>
                {this.renderUserAvatar()}
                <div style={{fontSize: '21px', fontWeight: '500', marginTop: '6px'}}> Your Account </div>
            </div>
        );
    }

    openSettings(e) {
        this.context.onAction('switchPage', {
            page: 'accountProfile',
            lastPage: 'accountHome'
        });
    }

    openSubscribe(e) {
        this.context.onAction('switchPage', {
            page: 'accountPlan',
            lastPage: 'accountHome'
        });
    }

    renderAccountFooter() {
        return (
            <div style={{display: 'flex', padding: '0 24px', marginTop: '18px', color: this.context.brandColor, fontWeight: 'bold', fontSize: '13px'}}>
                <div style={{cursor: 'pointer'}} role='button'> Contact support </div>
                <div style={{display: 'flex', flexGrow: 1, justifyContent: 'flex-end'}}>
                    <div style={{marginRight: '16px', cursor: 'pointer'}} onClick={e => this.openSettings(e)} role='button'> Settings </div>
                    <div style={{cursor: 'pointer'}} onClick={e => this.handleSignout(e)} role='button'> Logout </div>
                </div>
            </div>
        );
    }

    renderAccountDetail(e) {
        const {name, firstname, email} = this.context.member;
        const siteTitle = this.context.site.title;

        return (
            <div style={{padding: '0 24px'}}>
                <div style={{textAlign: 'center', marginBottom: '12px', fontSize: '14px'}}>
                    <span style={{fontWeight: 'bold'}}>Hey {firstname || name || email}! </span>
                    You are subscribed to free updates from <span style={{fontWeight: 'bold'}}>{siteTitle}</span>, but you don't have a paid subscription to unlock full access
                </div>
                <ActionButton label="Subscribe now" onClick={e => this.openSubscribe(e)} brandColor={this.context.brandColor} />
            </div>
        );
    }

    renderLogoutButton() {
        return (
            <div style={{paddingLeft: '21px', paddingRight: '16px', paddingTop: '12px', borderTop: '1px solid #EFEFEF', cursor: 'pointer'}}>
                <div role="button" onClick={(e) => {
                    this.handleAccountDetail(e);
                }} style={{marginBottom: '3px'}}> Account </div>
                <div role="button" onClick={(e) => {
                    this.handleSignout(e);
                }}> Log out </div>
            </div>
        );
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', color: '#313131'}}>
                {this.renderUserHeader()}
                {this.renderAccountDetail()}
                {this.renderAccountFooter()}
            </div>
        );
    }
}

class PaidAccountHomePage extends React.Component {
    static contextType = ParentContext;

    handleSignout(e) {
        e.preventDefault();
        this.context.onAction('signout');
    }

    renderHeader() {
        const memberEmail = this.context.member.email;

        return (
            <>
                <div style={{paddingLeft: '16px', paddingRight: '16px', color: '#A6A6A6', fontSize: '1.2rem', lineHeight: '1.0em'}}>
                    Signed in as
                </div>
                <div style={{paddingLeft: '16px', paddingRight: '16px', paddingBottom: '9px'}}>
                    {memberEmail}
                </div>
            </>
        );
    }

    renderUserAvatar() {
        const avatarImg = (this.context.member && this.context.member.avatar_image);

        const avatarContainerStyle = {
            position: 'relative',
            display: 'flex',
            width: '64px',
            height: '64px',
            marginBottom: '6px',
            borderRadius: '100%',
            boxShadow: '0 0 0 3px #fff',
            border: '1px solid gray',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center'
        };

        return (
            <div style={avatarContainerStyle}>
                <MemberAvatar gravatar={avatarImg} style={{userIcon: {color: 'black', width: '45px', height: '45px'}}} />
            </div>
        );
    }

    renderUserHeader() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '12px'}}>
                {this.renderUserAvatar()}
                <div style={{fontSize: '21px', fontWeight: '500', marginTop: '6px'}}> Your Account </div>
            </div>
        );
    }

    openSettings(e) {
        // no-op
    }

    openSubscribe(e) {
        this.context.onAction('switchPage', {
            page: 'accountPlan',
            lastPage: 'accountHome'
        });
    }

    renderAccountFooter() {
        return (
            <div style={{display: 'flex', padding: '0 24px', marginTop: '24px', color: this.context.brandColor, fontWeight: 'bold', fontSize: '13px'}}>
                <div style={{cursor: 'pointer'}} role='button'> Contact support </div>
                <div style={{display: 'flex', flexGrow: 1, justifyContent: 'flex-end'}}>
                    <div style={{cursor: 'pointer'}} onClick={e => this.handleSignout(e)} role='button'> Logout </div>
                </div>
            </div>
        );
    }

    renderAccountWelcome() {
        const {name, firstname, email} = this.context.member;
        const siteTitle = this.context.site.title;

        return (
            <div style={{padding: '0 24px'}}>
                <div style={{textAlign: 'center', marginBottom: '12px', fontSize: '14px'}}>
                    <span style={{fontWeight: 'bold'}}>Hey {firstname || name || email}! </span>
                    You have an active <span style={{fontWeight: 'bold'}}>{siteTitle}</span> account with access to all areas. Get in touch if you have any problems or need some help getting things updated, and thanks for subscribing.
                </div>
            </div>
        );
    }

    renderDivider() {
        return (
            <div style={{borderBottom: '1px solid grey'}}>  </div>
        );
    }

    getPlanLabel({amount = 0, currency_symbol: currencySymbol = '$', interval}) {
        return `${currencySymbol}${amount / 100} / ${interval}`;
    }

    getCardLabel({defaultCardLast4}) {
        return `**** **** **** ${defaultCardLast4}`;
    }

    openEditProfile() {
        this.context.onAction('switchPage', {
            page: 'accountProfile',
            lastPage: 'accountHome'
        });
    }

    openUpdatePlan() {
        this.context.onAction('switchPage', {
            page: 'accountPlan',
            lastPage: 'accountHome'
        });
    }

    onEditBilling() {
        this.context.onAction('editBilling');
    }

    onToggleSubscription(e, subscribed) {
        this.context.onAction('updateMember', {subscribed: !subscribed});
    }

    renderAccountDetails() {
        const buttonStyle = {
            padding: '6px 9px', border: '1px solid black', width: '60px', display: 'flex', justifyContent: 'center',
            borderRadius: '5px', cursor: 'pointer'
        };
        const {name, email, subscriptions, subscribed} = this.context.member;

        const {
            plan,
            default_payment_card_last4: defaultCardLast4
        } = subscriptions[0];

        return (
            <div style={{padding: '0 24px', marginTop: '24px', marginBottom: '24px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                        <div style={{fontWeight: 'bold', fontSize: '13px'}}> Profile </div>
                        <div style={{lineHeight: '18px'}}>
                            <div style={{color: '#666666'}}> {name} </div>
                            <div style={{color: '#666666', fontSize: '11px'}}> {email} </div>
                        </div>
                    </div>
                    <div style={buttonStyle} onClick={e => this.openEditProfile(e)}>
                        Edit
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '24px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                        <div style={{fontWeight: 'bold', fontSize: '13px'}}> Plan </div>
                        <div style={{lineHeight: '18px'}}>
                            <div style={{color: '#666666'}}> {this.getPlanLabel(plan)} </div>
                        </div>
                    </div>
                    <div style={buttonStyle} onClick={e => this.openUpdatePlan(e)}>
                        Change
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '24px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, marginTop: '5px'}}>
                        <div style={{fontWeight: 'bold', fontSize: '13px'}}> Billing Info </div>
                        <div style={{lineHeight: '18px'}}>
                            <div style={{color: '#666666'}}> {this.getCardLabel({defaultCardLast4})} </div>
                        </div>
                    </div>
                    <div style={buttonStyle} onClick={e => this.onEditBilling(e)}>
                        Update
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '24px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, marginTop: '5px'}}>
                        <div style={{fontWeight: 'bold', fontSize: '13px'}}> Newsletter </div>
                        <div style={{lineHeight: '18px'}}>
                            <div style={{color: '#666666'}}> You are subscribed to email newsletters </div>
                        </div>
                    </div>
                    <div>
                        <Switch onToggle={(e) => {
                            this.onToggleSubscription(e, subscribed);
                        }} checked={subscribed} />
                    </div>
                </div>
            </div>
        );
    }

    renderLogoutButton() {
        return (
            <div style={{paddingLeft: '21px', paddingRight: '16px', paddingTop: '12px', borderTop: '1px solid #EFEFEF', cursor: 'pointer'}}>
                <div role="button" onClick={(e) => {
                    this.handleAccountDetail(e);
                }} style={{marginBottom: '3px'}}> Account </div>
                <div role="button" onClick={(e) => {
                    this.handleSignout(e);
                }}> Log out </div>
            </div>
        );
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', color: '#313131'}}>
                {this.renderUserHeader()}
                {this.renderAccountWelcome()}
                {this.renderDivider()}
                {this.renderAccountDetails()}
                {this.renderDivider()}
                {this.renderAccountFooter()}
            </div>
        );
    }
}
export default class AccountHomePage extends React.Component {
    static contextType = ParentContext;

    render() {
        const {member} = this.context;

        if (member.paid) {
            return (
                <PaidAccountHomePage />
            );
        }
        return (
            <FreeAccountHomePage />
        );
    }
}