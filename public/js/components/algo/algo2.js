let algo2 = {
    templateUrl: 'js/components/algo/algo2.html',
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
        
        function foldTo (distance) {
        return ((Math.log(distance))/(Math.log(2))) ;
        }
    }]
}

export default algo2