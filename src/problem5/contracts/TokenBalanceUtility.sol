pragma solidity ^0.8.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalanceUtility {
    function getBalances(address wallet, address[] memory tokenContracts) public view returns (uint[] memory) {
        uint[] memory balances = new uint[](tokenContracts.length);
        for (uint i = 0; i < tokenContracts.length; i++) {
            IERC20 token = IERC20(tokenContracts[i]);
            balances[i] = token.balanceOf(wallet);
        }
        return balances;
    }
}