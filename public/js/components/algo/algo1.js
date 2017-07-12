let algo1 = {
    templateUrl: 'js/components/algo/algo1.html',
    controller: ['UsersService', '$state', function (UsersService, $state) {
        'use strict'
        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },

            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }

        });
        
        function friend (friends) {
        bestFriends = [];
            for (let i = 0; i < this.friends.length; i++) {
                if (this.friends[i].length == 4) {
                bestFriends.push(this.friends[i]);
                }       
            }
        return bestFriends;
        }   
    }]
}

export default algo1