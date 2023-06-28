<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'message' => $this->message,
            'receiver' => new UserResource($this->receiver),
            'sender' => new UserResource($this->sender),
            'date' => Carbon::make($this->created_at)->format('d/m/Y H:i:s'),
            'me' => auth()->user()->id == $this->sender_id,
        ];
    }
}
