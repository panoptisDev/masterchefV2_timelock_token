// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.6.12;

import "./libs/BEP20.sol";

contract TestContract is BEP20 {
  constructor(uint256 initialSupply) public BEP20("TestContract3", "TEST") {
    //_mint(msg.sender, initialSupply);
  }
}
