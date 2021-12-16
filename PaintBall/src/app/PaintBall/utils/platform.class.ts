export class Platform {

  public static isMobile() {

    const mQ = matchMedia && matchMedia( "(pointer:coarse)" );
    if ( mQ && mQ.media === "(pointer:coarse)" )
      return !!mQ.matches;
    else {
      const UA = navigator.userAgent;
      return ( /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test( UA ) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test( UA ) );
    }
  }
}
