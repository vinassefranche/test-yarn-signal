## Setup

run `yarn`

## Script working fine

1. In a terminal, run `yarn package working`
2. In another terminal, run `ps aux | grep yarn | grep "package"` to find the PID of the previous command
3. Run `kill -TERM {PID}`
4. See the log `outer: sigterm` in your first terminal

## Script not working fine

1. In a terminal, run `yarn package notWorking`
2. In another terminal, run `ps aux | grep yarn | grep "package"` to find the PID of the previous command
3. Run `kill -TERM {PID}`
4. See that no log is displayed in your first terminal
