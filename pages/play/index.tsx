import React from 'react';
import { FiGithub, FiPlayCircle } from 'react-icons/fi';

import play from '../../utils/play.json';

const Playground = () => {
  return (
    <section className="w-full text-black dark:text-white ">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {play.map((project) => (
            <div className="overflow-hidden relative group h-[17rem] shadow-sm shadow-current rounded-lg">
              <img
                alt="gallery"
                src={project.image}
                className="block object-cover object-top w-full h-full rounded-lg aspect-square"
              />
              <div className="-translate-y-[17rem] absolute inset-0 transition-all rounded-lg group-hover:translate-y-0 text-white bg-black/80">
                <div className="flex flex-col items-center justify-between gap-8 p-8 font-serif">
                  <h1 className="text-2xl font-black uppercase lg:text-3xl">
                    {project.name}
                  </h1>
                  <h5 className="leading-tight text-center">
                    {project.description}
                  </h5>
                  <div className="flex items-center gap-8 mx-auto w-max">
                    {project.link && (
                      <a
                        target="_blank"
                        href={project.link}
                        rel="noopener noreferrer nofollow"
                        className="rounded btn btn-primary btn-group"
                      >
                        <div className="flex items-center gap-4 font-semibold capitalize">
                          <span>Play</span>
                          <FiPlayCircle fontSize="1.5rem" />
                        </div>
                      </a>
                    )}
                    {project.repository && (
                      <a
                        target="_blank"
                        href={project.repository}
                        rel="noopener noreferrer nofollow"
                        className="text-current rounded btn btn-outline btn-group"
                      >
                        <div className="flex items-center gap-4 font-semibold capitalize">
                          <span>Repository</span>
                          <FiGithub fontSize="1.5rem" />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Playground;
