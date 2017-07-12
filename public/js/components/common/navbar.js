let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', 'moment', '$state', function(UsersService, $moment, $state) {
        'use strict'
        angular.extend(this, {
            $onInit() {

                this.time = $moment("20111031", "YYYYMMDD").fromNow();
                
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

export default navbar
