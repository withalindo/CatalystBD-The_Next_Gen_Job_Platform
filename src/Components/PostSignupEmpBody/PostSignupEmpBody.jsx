import React from 'react';
import './postSignupEmpBody.css';

const PostSignupEmpBody = () => {

    // Backend Integration
    const [formData, setFormData] = React.useState({
        fullname: '',
        email: '',
        phoneNumber: '',
        collegeOrUniversity: '',
        address: '',
        district: '',
        gender: '',
        birthdate: '',
        profileImage: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profileImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('fullname', formData.fullname);
        data.append('email', formData.email);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('collegeOrUniversity', formData.collegeOrUniversity);
        data.append('address', formData.address);
        data.append('district', formData.district);
        data.append('gender', formData.gender);
        data.append('birthdate', formData.birthdate);
        if (formData.profileImage) {
            data.append('profileImage', formData.profileImage);
        }

        try {
            const response = await fetch('http://localhost:5000/api/post-signup-emp-body', {
                method: 'POST',
                body: data,
            });
            const result = await response.json();
            if (response.ok) {
                alert('Profile created successfully');
            } else {
                alert('Error creating profile');
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Error submitting profile data:', error);
            alert('Failed to create profile');
        }
    };
    // Backend Integration

    return (
        <div className='postSignupEmpBody'>
            <h1>Personal Information</h1>
            <form className='fullForm' onSubmit={handleSubmit}>
                <div className='uploadSection'>
                    <label htmlFor='profileImage'>Upload Profile Image</label>
                    <input
                        name='profileImage'
                        type='file'
                        onChange={handleFileChange}
                    />
                </div>
                <div className='infoInputPart1'>
                    <input
                        type='text'
                        name='fullname'
                        placeholder='Full Name'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        name='phoneNumber'
                        placeholder='Phone Number'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        name='collegeOrUniversity'
                        placeholder='College or University'
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        name='address'
                        placeholder='Address'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='infoInputPart2'>
                    <input
                        type='text'
                        name='district'
                        placeholder='District'
                        className='district'
                        onChange={handleChange}
                        required
                    />
                    <select
                        name='gender'
                        className='selectGen'
                        onChange={handleChange}
                        required
                    >
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <div className='infoInputPart3'>
                    <input
                        name='birthdate'
                        type='date'
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>Next</button>
                </div>
            </form>
        </div>
    );
};

export default PostSignupEmpBody;