<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = ['sender_id', 'receiver_id', 'message'];

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }

    public function conversationsWithUser(int $id)
    {
        return $this->where(function ($query) use ($id) {
            $query->where('sender_id', auth()->id());
            $query->where('receiver_id', $id);
        })
            ->orWhere(function ($query) use ($id) {
                $query->where('sender_id', $id);
                $query->where('receiver_id', auth()->id());
            })
            ->with(['sender', 'receiver'])
            ->get();
    }
}
