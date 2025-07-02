import { Flex, Tag, Typography } from "antd"

export function CoinInfoModal({coin}) {
    return (
        <Flex align="center">
            <img src={coin.icon} alt={coin.name} style={{width: 40}}></img>
            <Typography.Title level={2}>{coin.symbol} {coin.name}</Typography.Title>
        </Flex>
    )
}