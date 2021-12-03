export const marketCapDescription = () => {
    return (
        <div>The total market value of a cryptocurrencys circulating supply. 
            It is analogous to the free-float capitalization in the stock market 
            Market Cap = Current Price x Circulating Supply. As Per COINMARKETCAP.</div>
    ) }

export const volumeDescription = () => {
        return (
            <div>A measure of how much of a cryptocurrency 
                was traded in the last 24 hours. As Per COINMARKETCAP.</div>
        ) }


export const dilutedMarketDescription = () => {
        return (
            <div>The market cap if the max supply was in circulation.
            Fully-diluted market cap (FDMC) = price x max supply. 
            If max supply is null, FDMC = price x total supply. 
            if max supply and total supply are infinite or not available, 
            fully-diluted market cap shows - -. As Per COINMARKETCAP.</div>
        ) }


export const circSupplyDescription = () => {
        return (
             <div>The amount of coins that are circulating in the market and are
                  in public hands. It is analogous to the flowing shares in the
                   stock market. As Per COINMARKETCAP.</div>
         ) }