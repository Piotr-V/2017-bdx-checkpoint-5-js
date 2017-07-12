let algo1 = {
    templateUrl: 'js/components/algo/algo1.html',
    controller: ['UsersService', '$state', function(UsersService, $state) {
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

        })
    }]
}

export default algo1