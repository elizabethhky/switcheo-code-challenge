pragma solidity ^0.8.0;

interface ERC20 {
    function balanceOf(address _owner) external view returns (uint256 balance);
}

contract TokenBalanceRetriever {
    function getBalances(address wallet, address[] calldata tokens) public view returns (uint256[] memory, uint256[] memory) {
        uint256 [] memory addresses = new uint256[](tokens.length);
        uint256[] memory balances = new uint256[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) {
            ERC20 token = ERC20(tokens[i]);
            addresses[i] = tokens[i];
            balances[i] = token.balanceOf(wallet);
        }
        return (addresses, balances);
    }
}