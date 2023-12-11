<?php 

namespace App\Traits;
trait ToastAlert {
    protected function toast ($message, $position = 'top-left', $timer = 2808) {
        $this->dispatchBrowserEvent('toast-alert', [
            'type' => 'success',
            'message' => $message,
            'position' => $position,
            'timer' => $timer

        ]);
        }
    }
    

?>