import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { previous } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });

    const[generatingImg, setGeneratingImg] = useState(false);
    const[loading, setLoading] = useState(false);


    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">
                    Create
                </h1>
                <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
                    Unleash your creativity with VisionCraft and share your breathtaking, imaginative images with our vibrant community.
                </p>
            </div>

        </section>
    )
}

export default CreatePost