import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import HeadingUI from '../HeadingUI/HeadingUI';
import { CallbackSkeletonType, CallbackSkeletonValue } from 'shared/objectModels/GenericModel';
import { ArrayType, ObjectType } from 'shared/helpers/helpers';
import { BASE_UPLOADS_URL } from 'shared/constants/genericApiRoutes';
import { formValidator } from 'utils/validators/validator';

interface FileWithPreview extends File {
    preview: string;
}

interface Props {
    multiple?: boolean,
    width?: string,
    height?: string,
    onChange?: CallbackSkeletonType,
    defaultFiles?: ArrayType,
    name: string,
    validationCallback?: CallbackSkeletonType | null,
    error?: string,
    classN?: string
}

const DropzoneUI = ({
    multiple = false,
    width = '400px',
    height = '400px',
    onChange = CallbackSkeletonValue,
    defaultFiles,
    name,
    validationCallback = null,
    error = '',
    classN
}: Props) => {
    const [files, setFiles] = useState<FileWithPreview[] | ArrayType>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const bodyRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (defaultFiles?.length) setFiles(defaultFiles)
    },[defaultFiles])

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const newFiles = Array.from(e.dataTransfer.files) as FileWithPreview[];

        newFiles.forEach((file) => {
            file.preview = URL.createObjectURL(file);
        });
        
        if (multiple) {
            setFiles([...files, ...newFiles]);
            return onChange([...files, ...newFiles])
        }
        if (newFiles?.length) {
            setFiles(newFiles)
            onChange(newFiles)
        }
        bodyRef?.current?.classList.remove('_drag')

    };

    const handleDelete = (index: number) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        bodyRef?.current?.classList.add('_drag')
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        bodyRef?.current?.classList.remove('_drag')
    };

    const handleDropzoneClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(e.target.files as FileList) as FileWithPreview[];
        const isValidated = validationCallback ? await validationCallback(newFiles) : true
        if (isValidated) {
            newFiles.forEach((file) => {
                file.preview = URL.createObjectURL(file);
            });
            if (multiple) {
                setFiles([...files, ...newFiles]);
                return onChange([...files, ...newFiles])
            }
            if (newFiles?.length) {
                setFiles(newFiles)
                onChange(newFiles)
            }
        }
    };

    const borderColor = error ? 'red' : 'silver'
    return (
        <>
            {error && <span className="error-message">{error}</span>}
            <div className={`DropzoneUI ${classN}`}
                style={{
                    width,
                    height,
                    backgroundImage: `linear-gradient(90deg, ${borderColor} 50%, transparent 50%), linear-gradient(90deg, ${borderColor} 50%, transparent 50%), linear-gradient(0deg, ${borderColor} 50%, transparent 50%), linear-gradient(0deg, ${borderColor} 50%, transparent 50%)`
                }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                ref={bodyRef}
            >
                <div
                    className='DropzoneUI__body'
                    onClick={handleDropzoneClick}
                >
                    <HeadingUI 
                        text={`Drag & drop some file${multiple ? 's' : ''} here, or click to select file${multiple ? 's' : ''}`}
                        size='14px'
                        align='center'
                    />
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                    multiple={multiple}
                    name={name}
                />

                <div className='DropzoneUI__files' style={{ maxHeight: +height.replace('px', '') - 30 + 'px' }}>
                    {files.map((file, index) => (
                        <div key={index} className='DropzoneUI__file'>
                            <img src={file.preview} alt={`Preview ${index}`} className='DropzoneUI__preview' />
                            <button
                                className='DropzoneUI__remove'
                                onClick={() => handleDelete(index)}
                                type='button'>
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default DropzoneUI;
